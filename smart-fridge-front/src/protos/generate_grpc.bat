SET DIR=C:\\Users\\witol\\source\\repos\\SmartFridge\\SmartFridge\\Protos 
SET OUT_DIR=C:\\Users\\witol\\source\\repos\\SmartFridgeFront\\smart-fridge-front\\src\\grpc
protoc -I=%DIR% greet.proto --js_out=import_style=commonjs:%OUT_DIR% --grpc-web_out=import_style=typescript,mode=grpcwebtext:%OUT_DIR%

