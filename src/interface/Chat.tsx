import { User, UserBrief } from './Auth';

// Message 每一条聊天的标准数据格式
export interface Message {
	sender: UserBrief,
	receiver: UserBrief,
	time: string,
	type: string, // "chat"
	content: string,
	is_photo: string, //0代表改信息为文字, 1代表该信息为图片链接
}

// PullMsgQueue 当websocket连接被建立时，服务器自动向客户端发送的所有未读消息的信息格式
export interface PullMsgQueue {
	type: string, // pull_chat
	sum_num: number,       
	uc_messages: Message[],
}

// GetHistoryReq 请求获取用户与某一好友的聊天记录的消息格式
export interface GetHistoryReq {
	id: number,
	token: string,
	theOtherId: number,
	start: number,
}

// GetHistoryResp 获取聊天记录请求的响应格式
export interface GetHistoryResp {
	statusCode: number, // 1用户信息错误, 2请求成功, 0服务器错误(已测试通过, 不会产生)
	statusMsg: string,
	sumNum: number,
	history: Message[],
}
