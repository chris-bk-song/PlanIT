const APIURL = "/";
const axios = require("axios");
export const getChatRooms = () => axios.get(`${APIURL}/chatroom/chatrooms`);

export const getChatRoomMessages = chatRoomName =>
    axios.get(`${APIURL}/chatroom/chatroom/messages/${chatRoomName}`);

export const joinRoom = room =>
    axios.post(`${APIURL}/chatroom/chatroom`, { room });