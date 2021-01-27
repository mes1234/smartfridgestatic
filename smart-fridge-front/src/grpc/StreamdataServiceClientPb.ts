/**
 * @fileoverview gRPC-Web generated client stub for streamdata
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as streamdata_pb from './streamdata_pb';


export class StreamerClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSayHello = new grpcWeb.AbstractClientBase.MethodInfo(
    streamdata_pb.RandomizeReply,
    (request: streamdata_pb.RandomizerRequest) => {
      return request.serializeBinary();
    },
    streamdata_pb.RandomizeReply.deserializeBinary
  );

  sayHello(
    request: streamdata_pb.RandomizerRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/streamdata.Streamer/SayHello',
      request,
      metadata || {},
      this.methodInfoSayHello);
  }

}

