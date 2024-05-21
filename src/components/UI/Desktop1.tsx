
import '../CSS/Desktop1.css'
export interface IDesktop1Props {
  className?: string;
}

export const Desktop1 = ({
  className,
  ...props
}: IDesktop1Props): JSX.Element => {
  const handleOnClick = () => {
    window.open('https://codecanyon.net/checkout/from_item/48826891?license=regular&support=bundle_6month&_gl=1*13itt1f*_ga*NjI5OTEyMDQ4LjE3MDAxNTMzNzA.*_ga_ZKBVC1X78F*MTcxNjI2OTU5NS4xOC4xLjE3MTYyNzEyODIuMC4wLjA.&_ga=2.210006101.137874136.1716220742-629912048.1700153370', '_blank', 'noopener,noreferrer');
  };
  const handleOnClickDocumentation = () => {
    window.open('https://qodematrix.com/docs/motion-art-for-elementor/');
  };
  const handleOnClickSupport = () => {
    window.open('https://support.qodematrix.com/', '_blank', 'noopener,noreferrer');
  };
  const handleOnClickPurchase = () => {
    window.open('https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891');
  };
  return (
    <>
   
    <div
      className={
        "h-[3711px] w-full relative overflow-hidden desktop " + className
      }>
        
        {/* Navbar */}

      <div className="w-[1525px] h-[970px] absolute left-0 top-[54px]">
        <img
          className="w-[220px] h-[52.48px] absolute left-[117px] top-[46px]"
          style={{ objectFit: "cover" }}
          src="motion-art-effect-logo-10.png"
        />
        {/* <div className="purchase bg-[#ffffff] rounded-[5px] w-[187px] h-[52px] absolute left-[1171px] top-[46px]"></div> */}
        <div className="purchase text-[#000000] text-left font-['Outfit-Regular',_sans-serif] text-[17px] font-normal absolute left-[1171px] top-[46px] bg-[#ffffff] rounded-[5px] w-[187px] h-[52px]">
         <button className='purchase' onClick={handleOnClickPurchase}>Purchase Now</button> 
        </div>
        <div className="text-left font-['Outfit',] text-base leading-[0undefined] font-normal absolute left-[117px] top-[180px] w-[132px] h-[125px]" style={{color:'#EEE5FF'}}>
          <span>
            <span className="transform-your-website-with-motion-art-effect-span lin-grad">
              Transform <br />
            </span>
            <span className="transform-your-website-with-motion-art-effect-span2 lin-grad">
              Your Website
              <br />
            </span>
            <div className='my-3'>
            <span className="transform-your-website-with-motion-art-effect-span3 ">
              With Motion Art
              <br />
            </span>
            <span className="transform-your-website-with-motion-art-effect-span4">
              effect
            </span>
            </div>
          </span>{" "}
        </div>
        <div className="text-[rgba(238,229,255,0.74)] text-left font-['Outfit-Regular',_sans-serif] text-lg font-normal absolute left-[449px] top-[531.5px] w-[570px] h-[47.5px]">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.{" "}
        </div>
        <div className=" font-['Sora-Regular',_sans-serif] text-[64px] font-normal absolute left-[469px] top-[160px] w-[488px] h-[190px]">
          <span style={{color:"#EEE5FF"}}>
            <span className="attract-your-visitors-attention-with-colorful-motion-art-effect-span">
              Attract Your Visitors Attention With Colorful
              <br />
            </span>
            <span className="attract-your-visitors-attention-with-colorful-motion-art-effect-span2 lin-grad">
              Motion Art Effect
              <br />
            </span>
          </span>{" "}
        </div>
        <div className="w-[267px] h-[88px] static">
          <img
            className="w-[88px] h-[88px] absolute left-[138px] top-[785px]"
            style={{ objectFit: "cover" }}
            src="motionarteffect-img-2-20.png"
          />
          <div className="text-[#ffffff] text-left font-['-',_sans-serif] text-lg font-normal absolute left-[245px] top-[842px] w-40 h-[31px]">
            <span>
              <span className="_4-5-score-9-reviews-span">4.5</span>
              <span className="_4-5-score-9-reviews-span2">
                {" "}
                score, 9 Reviews
              </span>
            </span>{" "}
          </div>
          <img
            className="w-[155px] h-5 absolute left-[250px] top-[809px]"
            style={{ objectFit: "cover" }}
            src="motionarteffect-img-4-10.png"
          />
        </div>
        <div className="w-[267px] h-[88px] static">
          <img
            className="w-[88px] h-[88px] absolute left-[629px] top-[785px]"
            style={{ objectFit: "cover" }}
            src="motionarteffect-img-2-21.png"
          />
          <div className="text-[#ffffff] text-left font-['-',_sans-serif] text-lg font-normal absolute left-[736px] top-[842px] w-40 h-[31px]">
            <span>
              <span className="_4-5-score-9-reviews-2-span">4.5</span>
              <span className="_4-5-score-9-reviews-2-span2">
                {" "}
                score, 9 Reviews
              </span>
            </span>{" "}
          </div>
          <img
            className="w-[155px] h-5 absolute left-[741px] top-[809px]"
            style={{ objectFit: "cover" }}
            src="motionarteffect-img-4-11.png"
          />
        </div>
        <div className="w-[267px] h-[88px] static">
          <img
            className="w-[88px] h-[88px] absolute left-[1120px] top-[785px]"
            style={{ objectFit: "cover" }}
            src="motionarteffect-img-2-22.png"
          />
          <div className="text-[#ffffff] text-left font-['-',_sans-serif] text-lg font-normal absolute left-[1227px] top-[842px] w-40 h-[31px]">
            <span>
              <span className="_4-5-score-9-reviews-3-span">4.5</span>
              <span className="_4-5-score-9-reviews-3-span2">
                {" "}
                score, 9 Reviews
              </span>
            </span>{" "}
          </div>
          <img
            className="w-[155px] h-5 absolute left-[1232px] top-[809px]"
            style={{ objectFit: "cover" }}
            src="motionarteffect-img-4-12.png"
          />
        </div>
        <div className="text-[#ffffff] text-left font-['Outfit-Medium',_sans-serif] text-[22px] font-medium absolute left-[560px] top-[680px] w-[463px] h-[39px]">
          Trusted by thousands of users around the world{" "}
        </div>
      </div>
      <div className="w-[1525px] h-[397px] absolute left-0 top-[1024px]">
        <img
          className="w-[248px] h-[248px] absolute left-[1166px] top-[75px]"
          style={{ objectFit: "cover" }}
          src="rectangle-30.png"
        />
        <div className="text-[#ffffff] text-left font-['Outfit-Medium',_sans-serif] text-[40px] font-medium absolute left-[88px] top-[81px] w-[625px] h-[100px]">
          Turn Your Cursor Into A Colorful <br />
          Magic Wand &amp; Charm Your Visitors{" "}
        </div>
        <div
          className="rounded-[19px] w-[331.39px] h-[61.5px] absolute left-[88px] top-[296px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(54, 14, 130, 1.00) 42.500001192092896%,rgba(248, 117, 22, 1.00) 100%)",
          }}
        ></div>
        <div className="w-[253px] h-[26px] static">
          <button className="text-[#f7e8e8] text-left font-['Outfit-Regular',_sans-serif] text-xl font-normal absolute left-[139px] top-[313px] w-[211px] h-[25px]" onClick={handleOnClickPurchase}>
            Purchase From Envato
          </button>
          <img
            className="w-[25px] h-[25px] absolute left-[367px] top-[314px] overflow-visible"
            src="pajamas-long-arrow0.svg"
          />
        </div>
        <div className="text-[rgba(238,229,255,0.74)] text-left font-['Outfit-Regular',_sans-serif] text-lg font-normal absolute left-[88px] top-[214px] w-[697px] h-[49px]">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.{" "}
        </div>
      </div>
      <div className="w-[1528px] h-[970px] absolute left-0 top-[1421px]">
        <div className="text-[#ffffff] text-left font-['Outfit-Regular',_sans-serif] text-[40px] font-normal absolute left-[481px] top-[38px] w-[610px] h-[100px]">
          Apply On Any Section Or Enable For Whole Page{" "}
        </div>
        <div
          className="rounded-[20px] border-solid border-[#1f1d1d] border-2 w-[610px] h-[561.83px] absolute left-[124px] top-[220px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 2, 7, 1.00) 0%,rgba(25, 30, 51, 1.00) 41.099974513053894%)",
          }}
        >
          <img
            className="w-[546.79px] h-[353.63px] absolute left-8 top-44"
            style={{ objectFit: "cover" }}
            src="motionarteffect-img-11-10.png"
          />
          <div className="text-[#ffffff] text-left font-['Outfit-Regular',_sans-serif] text-[15px] leading-6 font-normal absolute left-8 top-[97px] w-[546px] h-[60px]">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website. {" "}
          </div>
          <div className="text-[#ffffff] text-left absolute left-8 top-[30px] w-[546px] h-12">
            <span>
              <span className="apply-on-section-span">
                Apply On Section
                <br />
              </span>
              <span className="apply-on-section-span2">
                <br />
              </span>
            </span>{" "}
          </div>
        </div>
        <div
          className="rounded-[20px] border-solid border-[#1f1d1d] border-2 w-[610px] h-[601px] absolute left-[794px] top-[298px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 2, 7, 1.00) 0%,rgba(25, 30, 51, 1.00) 38.099974393844604%)",
          }}
        >
          <div className="text-[#ffffff] text-left font-['Outfit-Regular',_sans-serif] text-[15px] leading-6 font-normal absolute left-8 top-[97px] w-[546px] h-[60px]">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.{" "}
          </div>
          <div className="text-[#ffffff] text-left absolute left-8 top-[30px] w-[546px] h-12">
            <span>
              <span className="apply-on-page-span">
                Apply On Page
                <br />
              </span>
              <span className="apply-on-page-span2">
                <br />
              </span>
            </span>{" "}
          </div>
          <img
            className="w-[552px] h-[397px] absolute left-8 top-44"
            style={{ objectFit: "cover" }}
            src="motionarteffect-img-10-10.png"
          />
        </div>
      </div>
      <div className="w-[1525px] h-[510px] absolute left-0 top-[2391px] overflow-hidden">
        <div
          className="rounded-[20px] border-solid border-[#4d4747] border w-[1280px] h-[360px] absolute left-[123px] top-[75px] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(3, 8, 26, 1.00) 26.099976897239685%,rgba(22, 38, 50, 1.00) 100%)",
          }}
        >
          <div className="text-[#eee5ff] text-left font-['Outfit-SemiBold',_sans-serif] text-[25px] font-semibold absolute left-[448px] top-[67px]">
            Supported by All Popular Browsers{" "}
          </div>
          <div className="text-[rgba(238,229,255,0.74)] text-center font-['Outfit-Light',_sans-serif] text-base font-light absolute left-[439px] top-[114px] w-[408px]">
            Rest assured, Motion Art is designed to be compatible with all major
            web browsers.{" "}
          </div>
          <img
            className="w-[441px] h-12 absolute left-[420px] top-[241px]"
            style={{ objectFit: "cover" }}
            src="motionarteffect-img-8-10.png"
          />
        </div>
      </div>
      <div className="w-[1524px] h-[751px] absolute left-px top-[2901px] overflow-hidden">
        <div className="text-[#eee5ff] text-center font-['Outfit-SemiBold',_sans-serif] text-[40px] font-semibold absolute left-[521px] top-[55px] w-[457px] h-[100px]">
          An All-Round Plugin With Powerful Features{" "}
        </div>
        <div className="text-[rgba(238,229,255,0.74)] text-center font-['Outfit-Regular',_sans-serif] text-lg leading-number font-normal absolute left-[433px] top-[182px] w-[633px] h-[90px]">
          Whether you&#039;re a seasoned web designer or just starting out,
          Motion Art for Elementor seamlessly integrates with the Elementor
          platform, providing you with a seamless and intuitive experience.{" "}
        </div>
        <div
          className="rounded-[19px] border-solid border-[#363030] border w-[399.99px] h-[376.2px] absolute left-[140px] top-[331px] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(3, 8, 26, 1.00) 0%,rgba(22, 38, 50, 1.00) 88.0999743938446%)",
          }}
        >
          <img
            className="w-[188px] h-[188px] absolute left-0 top-0"
            style={{ objectFit: "cover" }}
            src="motionarteffect-img-9-10.png"
          />
          <div className="text-[#eee5ff] text-center font-['Sora-SemiBold',_sans-serif] text-[25px] font-semibold absolute left-[35px] top-[231px]">
            Light Weight{" "}
          </div>
          <div className="text-[rgba(238,229,255,0.74)] text-left font-['Outfit-Light',_sans-serif] text-base font-light absolute left-[35px] top-[281px] w-[350px] h-10">
            Motion Art for Elementor is designed to be lightweight.{" "}
          </div>
        </div>
        <div
          className="rounded-[19px] border-solid border-[#362d2d] border w-[399.99px] h-[376.2px] absolute left-[561.99px] top-[331px] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(3, 8, 26, 1.00) 0%,rgba(22, 38, 50, 1.00) 88.0999743938446%)",
          }}
        >
          <img
            className="w-[188px] h-[188px] absolute left-0 top-0"
            style={{ objectFit: "cover" }}
            src="motionarteffect-img-9-11.png"
          />
          <div className="text-[#eee5ff] text-center font-['Sora-SemiBold',_sans-serif] text-[25px] font-semibold absolute left-[35.01px] top-[233px]">
            100% Responsive{" "}
          </div>
          <div className="text-[rgba(238,229,255,0.74)] text-left font-['Outfit-Light',_sans-serif] text-base font-light absolute left-[35px] top-[281px] w-[350px] h-10">
            Create a consistent visual experience across all devices.{" "}
          </div>
        </div>
        <div
          className="rounded-[19px] border-solid border-[#362e2e] border w-[399.99px] h-[376.2px] absolute left-[983.98px] top-[331px] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(3, 8, 26, 1.00) 0%,rgba(22, 38, 50, 1.00) 88.0999743938446%)",
          }}
        >
          <img
            className="w-[188px] h-[188px] absolute left-0 top-0"
            style={{ objectFit: "cover" }}
            src="motionarteffect-img-9-12.png"
          />
          <div className="text-[#eee5ff] text-left font-['Sora-SemiBold',_sans-serif] text-[25px] font-semibold absolute left-[35.02px] top-[232px]">
            User Friendly Interface{" "}
          </div>
          <div className="text-[rgba(238,229,255,0.74)] text-left font-['Outfit-Light',_sans-serif] text-base font-light absolute left-[35px] top-[281px] w-[350px] h-10">
            Ensure a smooth experience for both applicants and administrators.{" "}
          </div>
        </div>
      </div>
      <div
        className="w-[1525px] h-[59px] absolute left-0 top-[3652px] overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, rgba(248, 117, 22, 1.00) 0%,rgba(94, 17, 255, 1.00) 100%)",
        }}>
        <div className="text-[#ffffff] text-left font-['Sora-Light',_sans-serif] text-sm font-light absolute left-[100px] top-[calc(50%_-_8.5px)] w-[379px] h-[17px]">
          © 2023 Copywrite. All rights reserved by QodeMatrix{" "}
        </div>
        <button className="text-[#ffffff] text-left font-['Sora-Light',_sans-serif] text-sm font-light absolute left-[1189px] top-[21px] w-[116.57px] h-[18px]" onClick={handleOnClickDocumentation}>
          Documentation
        </button>
        <button className="text-[#ffffff] text-left font-['Sora-Light',_sans-serif] text-sm font-light absolute right-[105.73px] top-[21px] w-[59.27px] h-[17px]" onClick={handleOnClickSupport}>
          Support
        </button>
      </div>
            <nav className="bg-[#262626] w-[1525px] h-[54px] fixed left-0 top-0 overflow-hidden">
        <img
          className="w-[30px] h-8 absolute left-[35px] top-[11px]"
          style={{ objectFit: "cover" }}
          src="motionarteffect-img-2-10.png"
        />
        <div
          className="text-left font-['-',_sans-serif] text-2xl font-normal absolute left-[72px] top-2.5 w-[209px] h-8"
          style={{ letterSpacing: "0undefined" }}
        >
          <span>
            <span className="envatomarket-span" style={{color:"#EEE5FF",fontSize:24}}>envato</span>
            <span className="envatomarket-span2" style={{color:"#82B45B",letterSpacing:-2,fontSize:24,fontWeight:"100"}}>market</span>
          </span>{" "}
        </div>
        <div className="bg-[#82b440] rounded-[5px] w-[86px] h-[31px] absolute left-[1417px] top-3"></div>
        <button className="text-[#ffffff] text-left font-['Sora-Regular',_sans-serif] text-[13px] font-normal absolute left-[1432px] top-5 w-14 h-[15px]" onClick={handleOnClick}>
          Buy now
        </button>
      </nav>
    </div>
    </>
  );
};
