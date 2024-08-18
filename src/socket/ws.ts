import { IncomingMessage } from "http";
import { Server, WebSocket } from "ws";

export class App {
    constructor(){
        try {
            this.webSocketServer = new WebSocket.Server({ port: 8080 });
        } catch (error) {
            throw error;
        }
    }

    webSocketServer!:Server<typeof WebSocket, typeof IncomingMessage>;

    launch():void {
        this.webSocketServer.on("connection", (ws: WebSocket) => {
            console.log("CLIENT CONNECTED\n");
    
            ws.on("message", function incoming(message: string) {
                console.log(`CLIENT INCOMING MESSAGE:\n${message}\n`);
                if (message.toString().toLowerCase().includes("hello")) {
                    ws.send("Hello!");
                }
            });
    
            ws.on("close", function () {
                console.log("CLIENT DESCONNECTED\n");
            });

        });
        console.log("RUNNING AT ws://127.0.0.1:8080\n");
    }

    static test():string{
        return "ok";
    }
}