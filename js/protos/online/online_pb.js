// source: protos/online/online.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var github_com_tron$us_go$btfs$common_protos_node_node_pb = require('../../github.com/tron-us/go-btfs-common/protos/node/node_pb.js');
goog.object.extend(proto, github_com_tron$us_go$btfs$common_protos_node_node_pb);
var github_com_tron$us_protobuf_gogoproto_gogo_pb = require('../../github.com/tron-us/protobuf/gogoproto/gogo_pb.js');
goog.object.extend(proto, github_com_tron$us_protobuf_gogoproto_gogo_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.online.PayLoadInfo', null, global);
goog.exportSymbol('proto.online.ReqSignMetrics', null, global);
goog.exportSymbol('proto.online.RespSignMetrics', null, global);
goog.exportSymbol('proto.online.ResponseCode', null, global);
goog.exportSymbol('proto.online.SignedInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.online.ReqSignMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.online.ReqSignMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.online.ReqSignMetrics.displayName = 'proto.online.ReqSignMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.online.PayLoadInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.online.PayLoadInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.online.PayLoadInfo.displayName = 'proto.online.PayLoadInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.online.RespSignMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.online.RespSignMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.online.RespSignMetrics.displayName = 'proto.online.RespSignMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.online.SignedInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.online.SignedInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.online.SignedInfo.displayName = 'proto.online.SignedInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.online.ReqSignMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.online.ReqSignMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.online.ReqSignMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.online.ReqSignMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: msg.getPublicKey_asB64(),
    signature: msg.getSignature_asB64(),
    payload: msg.getPayload_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.online.ReqSignMetrics}
 */
proto.online.ReqSignMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.online.ReqSignMetrics;
  return proto.online.ReqSignMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.online.ReqSignMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.online.ReqSignMetrics}
 */
proto.online.ReqSignMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.online.ReqSignMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.online.ReqSignMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.online.ReqSignMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.online.ReqSignMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.online.ReqSignMetrics.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.online.ReqSignMetrics.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.online.ReqSignMetrics.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.online.ReqSignMetrics} returns this
 */
proto.online.ReqSignMetrics.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.online.ReqSignMetrics.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.online.ReqSignMetrics.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.online.ReqSignMetrics.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.online.ReqSignMetrics} returns this
 */
proto.online.ReqSignMetrics.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes payload = 3;
 * @return {!(string|Uint8Array)}
 */
proto.online.ReqSignMetrics.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes payload = 3;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.online.ReqSignMetrics.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.online.ReqSignMetrics.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.online.ReqSignMetrics} returns this
 */
proto.online.ReqSignMetrics.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.online.PayLoadInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.online.PayLoadInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.online.PayLoadInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.online.PayLoadInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    node: (f = msg.getNode()) && github_com_tron$us_go$btfs$common_protos_node_node_pb.Node.toObject(includeInstance, f),
    lastSignedInfo: (f = msg.getLastSignedInfo()) && proto.online.SignedInfo.toObject(includeInstance, f),
    lastSignature: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lastTime: (f = msg.getLastTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.online.PayLoadInfo}
 */
proto.online.PayLoadInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.online.PayLoadInfo;
  return proto.online.PayLoadInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.online.PayLoadInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.online.PayLoadInfo}
 */
proto.online.PayLoadInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 2:
      var value = new github_com_tron$us_go$btfs$common_protos_node_node_pb.Node;
      reader.readMessage(value,github_com_tron$us_go$btfs$common_protos_node_node_pb.Node.deserializeBinaryFromReader);
      msg.setNode(value);
      break;
    case 3:
      var value = new proto.online.SignedInfo;
      reader.readMessage(value,proto.online.SignedInfo.deserializeBinaryFromReader);
      msg.setLastSignedInfo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastSignature(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.online.PayLoadInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.online.PayLoadInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.online.PayLoadInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.online.PayLoadInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_tron$us_go$btfs$common_protos_node_node_pb.Node.serializeBinaryToWriter
    );
  }
  f = message.getLastSignedInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.online.SignedInfo.serializeBinaryToWriter
    );
  }
  f = message.getLastSignature();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLastTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string node_id = 1;
 * @return {string}
 */
proto.online.PayLoadInfo.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.online.PayLoadInfo} returns this
 */
proto.online.PayLoadInfo.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional node.Node node = 2;
 * @return {?proto.node.Node}
 */
proto.online.PayLoadInfo.prototype.getNode = function() {
  return /** @type{?proto.node.Node} */ (
    jspb.Message.getWrapperField(this, github_com_tron$us_go$btfs$common_protos_node_node_pb.Node, 2));
};


/**
 * @param {?proto.node.Node|undefined} value
 * @return {!proto.online.PayLoadInfo} returns this
*/
proto.online.PayLoadInfo.prototype.setNode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.online.PayLoadInfo} returns this
 */
proto.online.PayLoadInfo.prototype.clearNode = function() {
  return this.setNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.online.PayLoadInfo.prototype.hasNode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SignedInfo last_signed_info = 3;
 * @return {?proto.online.SignedInfo}
 */
proto.online.PayLoadInfo.prototype.getLastSignedInfo = function() {
  return /** @type{?proto.online.SignedInfo} */ (
    jspb.Message.getWrapperField(this, proto.online.SignedInfo, 3));
};


/**
 * @param {?proto.online.SignedInfo|undefined} value
 * @return {!proto.online.PayLoadInfo} returns this
*/
proto.online.PayLoadInfo.prototype.setLastSignedInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.online.PayLoadInfo} returns this
 */
proto.online.PayLoadInfo.prototype.clearLastSignedInfo = function() {
  return this.setLastSignedInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.online.PayLoadInfo.prototype.hasLastSignedInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string last_signature = 4;
 * @return {string}
 */
proto.online.PayLoadInfo.prototype.getLastSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.online.PayLoadInfo} returns this
 */
proto.online.PayLoadInfo.prototype.setLastSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp last_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.online.PayLoadInfo.prototype.getLastTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.online.PayLoadInfo} returns this
*/
proto.online.PayLoadInfo.prototype.setLastTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.online.PayLoadInfo} returns this
 */
proto.online.PayLoadInfo.prototype.clearLastTime = function() {
  return this.setLastTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.online.PayLoadInfo.prototype.hasLastTime = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.online.RespSignMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.online.RespSignMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.online.RespSignMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.online.RespSignMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signedInfo: (f = msg.getSignedInfo()) && proto.online.SignedInfo.toObject(includeInstance, f),
    signature: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.online.RespSignMetrics}
 */
proto.online.RespSignMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.online.RespSignMetrics;
  return proto.online.RespSignMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.online.RespSignMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.online.RespSignMetrics}
 */
proto.online.RespSignMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.online.ResponseCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.online.SignedInfo;
      reader.readMessage(value,proto.online.SignedInfo.deserializeBinaryFromReader);
      msg.setSignedInfo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.online.RespSignMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.online.RespSignMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.online.RespSignMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.online.RespSignMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignedInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.online.SignedInfo.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ResponseCode code = 1;
 * @return {!proto.online.ResponseCode}
 */
proto.online.RespSignMetrics.prototype.getCode = function() {
  return /** @type {!proto.online.ResponseCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.online.ResponseCode} value
 * @return {!proto.online.RespSignMetrics} returns this
 */
proto.online.RespSignMetrics.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.online.RespSignMetrics.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.online.RespSignMetrics} returns this
 */
proto.online.RespSignMetrics.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SignedInfo signed_info = 3;
 * @return {?proto.online.SignedInfo}
 */
proto.online.RespSignMetrics.prototype.getSignedInfo = function() {
  return /** @type{?proto.online.SignedInfo} */ (
    jspb.Message.getWrapperField(this, proto.online.SignedInfo, 3));
};


/**
 * @param {?proto.online.SignedInfo|undefined} value
 * @return {!proto.online.RespSignMetrics} returns this
*/
proto.online.RespSignMetrics.prototype.setSignedInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.online.RespSignMetrics} returns this
 */
proto.online.RespSignMetrics.prototype.clearSignedInfo = function() {
  return this.setSignedInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.online.RespSignMetrics.prototype.hasSignedInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string signature = 4;
 * @return {string}
 */
proto.online.RespSignMetrics.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.online.RespSignMetrics} returns this
 */
proto.online.RespSignMetrics.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.online.SignedInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.online.SignedInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.online.SignedInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.online.SignedInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    version: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nonce: jspb.Message.getFieldWithDefault(msg, 4, 0),
    bttcAddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    signedTime: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.online.SignedInfo}
 */
proto.online.SignedInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.online.SignedInfo;
  return proto.online.SignedInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.online.SignedInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.online.SignedInfo}
 */
proto.online.SignedInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBttcAddress(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSignedTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.online.SignedInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.online.SignedInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.online.SignedInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.online.SignedInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedTime();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getBttcAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSignedTime();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional string peer = 1;
 * @return {string}
 */
proto.online.SignedInfo.prototype.getPeer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.online.SignedInfo} returns this
 */
proto.online.SignedInfo.prototype.setPeer = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 created_time = 2;
 * @return {number}
 */
proto.online.SignedInfo.prototype.getCreatedTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.online.SignedInfo} returns this
 */
proto.online.SignedInfo.prototype.setCreatedTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.online.SignedInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.online.SignedInfo} returns this
 */
proto.online.SignedInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 nonce = 4;
 * @return {number}
 */
proto.online.SignedInfo.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.online.SignedInfo} returns this
 */
proto.online.SignedInfo.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string bttc_address = 5;
 * @return {string}
 */
proto.online.SignedInfo.prototype.getBttcAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.online.SignedInfo} returns this
 */
proto.online.SignedInfo.prototype.setBttcAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 signed_time = 6;
 * @return {number}
 */
proto.online.SignedInfo.prototype.getSignedTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.online.SignedInfo} returns this
 */
proto.online.SignedInfo.prototype.setSignedTime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * @enum {number}
 */
proto.online.ResponseCode = {
  SUCCESS: 0,
  SIGNATURE_FORMAT_ERROR: 1,
  COMPUTE_ADDRESS_ERROR: 2,
  TIMEOUT_ERROR: 3,
  OTHER_ERROR: 20
};

goog.object.extend(exports, proto.online);
