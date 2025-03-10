import React, { useEffect, useRef } from "react";
import { Modal, TitleBar } from "@react95/core";
import { Cdplayer107 } from "@react95/icons";
import { startWebamp } from '../context/startWebamp';

const Player = () => {
    const containerRef = useRef(null); // Webamp 컨테이너 참조
    let webampInstance = null; // webamp 인스턴스 저장

    useEffect(() => {
        if (containerRef.current) {
            startWebamp(containerRef.current); // 열릴 때 webamp 실행
        } else {
            console.error("Container element not found");
        }

        // cleanup function: webamp 종료 및 스트림 해제
        return () => {
            if (webampInstance && webampInstance.dispose) {
                webampInstance.dispose(); // webamp 종료
                console.log("Webamp closed");
            }
        };
    }, []); // 한 번만 실행

    return <div id="winamp-container" ref={containerRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default Player;