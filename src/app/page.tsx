"use client"

import Link from "next/link";
import ShowChat from "./component/showChat";
import BoxInput from "./component/boxInput";
import { useState, useEffect} from "react";
import {IChatItem} from "./types/dataType";
import AppContext from "./context/ChatContext";
import { CHAT_HISTORY } from "./libs/constant";

export default function Home() {

  const [chatItems, setChatItems] = useState<IChatItem[]>([]);

  useEffect(() => {
    const chatHisttory = localStorage.getItem(CHAT_HISTORY);
    if (chatHisttory) {
      setChatItems(JSON.parse(chatHisttory))
    }
  }, [])

  return (
    <AppContext.Provider value={{chatItems, setChatItems}}>
      <main className="p-10">
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-2">
            <BoxInput />
          </div>
          <div className="col-span-3">
            <div className="border p-5 rounded">
              <ShowChat  />
            </div>
          </div>
        </div>
      </main>
    </AppContext.Provider>
  )
}
