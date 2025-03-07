import React, { useEffect } from "react";
import { Modal, TitleBar } from "@react95/core";
import { Cdplayer107 } from "@react95/icons";
import { startWebamp } from "../../context/startWebamp";

const PlayerModal = ({ closeModal }) => {
    useEffect(() => {
        startWebamp(); // 모달이 열릴 때 webamp 실행
    }, []); // 한 번만 실행

    return (
    <div id="winamp-container" style={{ width: "100%", height: "100%" }}></div>
    );
};

export default PlayerModal;