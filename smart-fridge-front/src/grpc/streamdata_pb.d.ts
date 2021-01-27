import * as jspb from 'google-protobuf'



export class RandomizerRequest extends jspb.Message {
  getStart(): number;
  setStart(value: number): RandomizerRequest;

  getStop(): number;
  setStop(value: number): RandomizerRequest;

  getCount(): number;
  setCount(value: number): RandomizerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RandomizerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RandomizerRequest): RandomizerRequest.AsObject;
  static serializeBinaryToWriter(message: RandomizerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RandomizerRequest;
  static deserializeBinaryFromReader(message: RandomizerRequest, reader: jspb.BinaryReader): RandomizerRequest;
}

export namespace RandomizerRequest {
  export type AsObject = {
    start: number,
    stop: number,
    count: number,
  }
}

export class RandomizeReply extends jspb.Message {
  getMessage(): number;
  setMessage(value: number): RandomizeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RandomizeReply.AsObject;
  static toObject(includeInstance: boolean, msg: RandomizeReply): RandomizeReply.AsObject;
  static serializeBinaryToWriter(message: RandomizeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RandomizeReply;
  static deserializeBinaryFromReader(message: RandomizeReply, reader: jspb.BinaryReader): RandomizeReply;
}

export namespace RandomizeReply {
  export type AsObject = {
    message: number,
  }
}

