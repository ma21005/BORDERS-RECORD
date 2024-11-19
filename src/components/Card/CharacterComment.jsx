// キャラクターカードのタイトル画面にある画像をホバーした場合に呼び出される
// 画像を変化させ、各キャラクターのセリフを表示させる

import React from 'react';

export default function CharacterComment({ character }) {
  let imageName = character.名前;
  if (character.黒トリガー && character.名前 === "空閑 遊真") {
    imageName = "空閑 遊真_2";
  } else if (character.黒トリガー && character.名前 === "迅 悠一") {
    imageName = "迅 悠一_2";
  } else if (character.特殊トリガー && character.名前 === "ヒュース") {
    imageName = "ヒュース_2";
  }

  return (
    <div className="character-comment-container w-full h-full">
      <div className="relative w-full h-full">
        {/* SVGフィルターを使って画像を floodColor で指定した色で塗りつぶす */}
        <svg width="0" height="0">
          <defs>
            <filter id="solid-color-filter">
              <feFlood floodColor="#222222" result="flood" />
              <feComposite in="flood" in2="SourceAlpha" operator="in" />
              <feMerge>
                <feMergeNode />
              </feMerge>
            </filter>
          </defs>
        </svg>

        <img
          src={`https://borders-records.s3.ap-northeast-1.amazonaws.com/characters/${imageName}.png`}
          alt={`${imageName}`}
          style={{ filter: "url(#solid-color-filter)" }}
          className="image-protect object-cover w-full h-full"
        />

        {/* キャラクターごとのセリフに<br>が含まれる場合は改行して表示させる */}
        <div className="character-comment text-xl">
          {character.セリフ.split('<br>').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < character.セリフ.split('<br>').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
