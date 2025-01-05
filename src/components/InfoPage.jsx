import React from "react";
import { useNavigate } from 'react-router-dom';

const InfoPage = () => {
  const navigate = useNavigate(); // useNavigate フックを取得

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden main-container">
      <div className="info-container rounded-xl w-10/12 h-4/6 lg:w-7/12 lg:h-4/6 text-white">
        <p>当サイトは個人による制作・運営の非公式ファンサイトであり、ワールドトリガーの魅力をより多くの方に知ってもらうことを目的として製作しています。</p>
        <p>当サイトで使用している画像の著作権・肖像権等は各権利者に帰属いたします。</p>
        <p>これらの画像は純粋な応援の目的のみに使用しておりますが、万一～にて問題があるとご判断された場合は、ご連絡いただき次第速やかに対処させていただきます。</p>
        <p>当サイトに掲載されている情報は正確性について万全を期しておりますが、情報の誤りがある場合がありますので予めご了承ください。</p>
        <p>​また、ご意見/ご要望などがあれば以下のフォームか、メールアドレスまで送信よろしくお願いします。</p>

        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ホームに戻る
        </button>
      </div>
    </div>
  );
};

export default InfoPage;