import { User, UserBrief } from "./Auth"

// SetProfileReq 编辑个人信息的http请求格式, 前端不要在这里提供password的修改, password应当赋为null
export interface SetProfileReq {
	token: string, // token一律暂时以当前用户的password代替, 以下的token不再赘述(token是为了保证操作由当前客户端做出, 防止被恶意攻击)
	id: number,
	newInfo: User, // 将用户填入的新个人信息打包成为UserJson对象发送
}

// SetProfileResp 返回编辑个人请求的响应格式
export interface SetProfileResp {
	statusCode: string,
	statusMsg: string,
	nowInfo: User, // 如果有一些信息用户没有填写，后端会自动生成一个默认字段返回，索引用户个人信息应当使用返回值更新
}

// 一下几个结构体定义了在添加好友的流程中需要用到的消息格式，无特殊说明均为websocket消息
// 在这里统一定义请求发送者为A，请求接收者为B，服务器为S

// AddFriendReq 添加好友请求的格式，发送给S
export interface AddFriendReq {
	token: string, // 该请求为http请求，也是整个添加好友的过程中唯一的http请求
	sender: UserBrief,
	receiverId: number,
	brief: string, // 申请添加好友的介绍信息
}

// AddFriendResp 添加好友请求的响应格式，由S发送给A，仅用以当作http请求的响应
export interface AddFriendResp {
	statusCode: number,
	statusMsg:  string,
}

// GetFriendReqMsg S向B发送的消息，告知B接收到了来自A的好友请求，并展示相关信息
export interface GetFriendReqMsg {
	sender: UserBrief,
	brief: string,
	selfId: number,
	type: string, // "add_friend"
}

// CheckFriendMsg 重点注意!!! 该条信息的json键需要使用驼峰命名法才能被服务器正常识别!!!
// CheckFriendMsg 由B发送给S的消息，用以告知服务器B是否接受了A的好友请求
export interface CheckFriendMsg {
	isAcceptedCode: number, // 1代表好友建立被拒绝，2代表好友建立成功
	self: UserBrief,
	theOther: UserBrief,
	type: string, //"add_friend_fail_or_success"
}

// AddFriendFailOrSuccess 由服务器发送给A与B的消息，用以单独通知A好友请求被拒绝，或者告知A与B好友已经建立成功
export interface AddFriendFailOrSuccess {
	message: string,
	type: string, // "add_friend_fail_or_success"
	theOther: UserBrief,
}

export interface PullFrdReqQueue {
	type: string,
	sumNum: number,
	reqQueue: GetFriendReqMsg[] // "pull_friend_req"
}

// SearchFriendReq 搜索好友请求的格式
export interface SearchFriendReq {
	searchTypeCode: number, // 1为id搜索，2为username搜索
	id: number,
	username: string,
	selfId: number,
	token: string,
}

// SearchFriendResp 搜索好友请求的响应格式
export interface SearchFriendResp {
	statusCode: number, // 0代表服务器错误，1代表未查询到对应user信息，2代表查询成功
	statusMsg: string,
	user: User,
	isFriendCode: number, // 1代表你们已经是好友，0代表你们还不是好友
}

export interface GetProfileReq {
	id: number,
	username: string,
	token: string,
}

export interface GetProfileResp {
	statusCode: number,
	statusMsg: string,
	user: User,
}

export interface GetFrdListReq {
	id: number,
	token: string,
}

export interface GetFrdListResp {
	statusCode: number,
	statusMsg: string,
	sumNum: number,
	friends: UserBrief[],
}

export interface DeleteFrdReq {
	id: number, 
	token: string,
	theOtherId: number,  
}

export interface DeleteFrdResp {
	statusCode: number,
	statusMsg: string,
}
