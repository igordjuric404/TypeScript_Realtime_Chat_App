import { Socket, Server as NetServer } from "net"
import { NextApiRequest, NextApiResponse } from "next"
import { Server as SocketIOServer} from "socket.io"


type NextApiResponseWithSocket = NextApiResponse & {
    socket: Socket & {
        server: NetServer & {
            io: SocketIOServer
        }
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponseWithSocket){
    if(res.socket.server.io){
        res.end()
        return
    }
    const io = new SocketIOServer(res.socket.server as any, {addTrailingSlash: false})

    res.socket.server.io = io;

    io.on('connection', (socket) => {
        console.log('on connection')
        socket.on('message-created', (messageObject) => {
            socket.broadcast.emit('new-message-received', messageObject)
        })
    })

    res.end();
}