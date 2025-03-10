import Webamp from 'webamp';

let webampInstance = null;  // ✅ 전역 변수로 Webamp 인스턴스 저장

const startWebamp = (container) => {
    if (!Webamp.browserIsSupported()) return;

    if (!webampInstance) {  // ✅ 이미 실행 중인지 확인
        webampInstance = new Webamp({
            initialTracks: [
                {
                    metadata: { artist: "AJR", title: "Bang!" },
                    url: "/AJR-bang!.mp3",
                },
                // {
                //     metadata: { artist: "G-Dragon", title: "소년이여 (A BOY)" },
                //     url: "/G-DRAGON-A-BOY.mp3",
                // }
            ]
        });
        
        webampInstance.onClose(() => {
            webampInstance.dispose();
            webampInstance = null;  // ✅ Webamp 종료 시 전역 변수 초기화
        });

        if (container) {
            webampInstance.renderWhenReady(container); // 직접 전달받은 컨테이너 사용
        } else {
            console.warn('No valid container found for webamp.');
        }
    }
};

export { startWebamp };