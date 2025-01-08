import React from "react";
import LogoX from "../images/x-logo-white.png";
import { useNavigate } from 'react-router-dom';

const InfoPage = () => {
  const navigate = useNavigate(); // useNavigate フックを取得

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden main-container">
      <div className="info-container rounded-xl w-10/12 lg:w-7/12 text-white max-h-[90vh] overflow-y-auto">
        <div className="character-name-container mt-8 mb-4 lg:mb-12">
          <h1 className="text-2xl lg:text-4xl font-bold text-center text-white my-3">当サイトについて</h1>
        </div>
        <div className="pr-4 pl-4 lg:pr-12 lg:pl-12 text-lg font-bold">
          <p className="my-3">当サイトは、個人が制作・運営する非公式のファンサイトであり、ワールドトリガーの魅力をより多くの方に知っていただくことを目的としております。</p>
          <p className="my-3">サイト内で使用している画像の著作権および肖像権等は、すべて各権利者に帰属します。</p>
          <p className="my-3">これらの画像は、純粋に作品を応援する目的で使用しておりますが、万一関係者様にて問題があるとご判断される場合は、ご連絡いただき次第、迅速に対処いたします。</p>
          <p className="my-3">ご意見・ご要望・記載ミス等がございましたら、以下のSNSまたはメールアドレスまでお気軽にご連絡ください。</p>
        </div>

        <div className="mt-4 lg:mt-8 flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-24">
          <a
            href="https://x.com/GOTCHA_005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src={LogoX}
              alt="X Logo"
              className="w-8 h-8 lg:w-12 lg:h-12 hover:opacity-80"
            />
          </a>

          <a href="mailto:x1nano0513@gmail.com" className="text-[#166f8f] hover:underline text-lg lg:text-2xl font-bold">
            x1nano0513@gmail.com
          </a>
        </div>


        <div className="flex justify-center mt-8 lg:mt-20 mb-8">
          <button
            onClick={() => navigate('/')}
            className="relative z-0 h-14 lg:h-16 rounded-full bg-[#166f8f] px-6 text-neutral-50
                  after:absolute after:left-0 after:top-0 after:-z-10 after:h-full
                  after:w-full after:rounded-full after:bg-[#166f8f]
                  hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0
                  hover:after:transition hover:after:duration-500"
          >
            <span className="back-button-text my-8 text-xl lg:text-3xl">BACK</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;