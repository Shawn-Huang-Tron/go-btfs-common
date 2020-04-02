package utils

import (
	"context"
	sharedpb "github.com/tron-us/go-btfs-common/protos/shared"

	"github.com/tron-us/go-common/v2/constant"
	"github.com/tron-us/go-common/v2/db"
	"github.com/tron-us/go-common/v2/db/postgres"
	"github.com/tron-us/go-common/v2/db/redis"
	"github.com/tron-us/go-common/v2/log"

	"go.uber.org/zap"
)


func CheckRuntime(ctx context.Context, runtime *sharedpb.SignedRuntimeInfoRequest, connection db.ConnectionUrls) (*sharedpb.RuntimeInfoReport, error) {
	// db runtime
	report := new(sharedpb.RuntimeInfoReport)
	report.Status = sharedpb.RuntimeInfoReport_RUNNING
	const DBURLDNE = "DB URL does not exist !!"
	const RDURLDNE = "RD URL does not exist !!"

	for key , url := range connection.PgURL {

		if url != "" {
			// Check postgres dbWrite
			PGDBWrite := postgres.CreateTGPGDB(url)
			if err := PGDBWrite.Ping(); err != nil {
				report.DbStatusExtra = append(report.DbStatusExtra, []byte(key+ ":" +constant.DBWriteConnectionError))
				report.Status = sharedpb.RuntimeInfoReport_SICK
				log.Error(constant.DBWriteConnectionError, zap.Error(err))
			}
			// Check postgres dbRead
			PGDBRead := postgres.CreateTGPGDB(url)
			if err := PGDBRead.Ping(); err != nil {
				report.DbStatusExtra = append(report.DbStatusExtra, []byte(key+ ":" +constant.DBReadConnectionError))
				report.Status = sharedpb.RuntimeInfoReport_SICK
				log.Error(constant.DBReadConnectionError, zap.Error(err))
			}
			// Assume the database connection is healthy
			report.DbStatusExtra = append(report.DbStatusExtra, []byte(key+ ":" + constant.DBConnectionHealthy))
		} else {
			report.DbStatusExtra = append(report.DbStatusExtra, []byte(key + ":" + DBURLDNE))
		}
	}

	// Check redis environment variable
	if connection.RdURL != "" {
		opts, errParse := redis.ParseRedisURL(connection.RdURL)
		if errParse != nil {
			log.Error(constant.RDURLParseError, zap.Error(errParse))
		}
		errConn := redis.CheckRedisConnection(redis.NewRedisConn(opts))
		if errConn != nil {
			report.RdStatusExtra = []byte(constant.RDConnectionError)
			report.Status = sharedpb.RuntimeInfoReport_SICK
			log.Error(constant.RDConnectionError, zap.Error(errConn))
		}
		// Assume the redis connection is healthy
		report.RdStatusExtra = []byte(constant.RDConnectionHealthy)
	} else {
		report.RdStatusExtra = []byte(RDURLDNE)
	}
	// Remaining fields will be populated by the calling service
	// Reserve: only pass fatal error to higher level
	return report, nil
}
