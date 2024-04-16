const animationKeyframes = `
  @keyframes stroke {
    100% {
      stroke-dashoffset: -100;
    }
    0% {
      stroke-dashoffset: 0;
    }
  }
`;
function LogoBW2({ height, width }) {
  return (
    // <div
    //   className="animation-slide"
    //   data-animation-identifier="interstellar"
    //   style={{ width: width, maxWidth: "50vw", margin: "auto" }}
    // >
    //   <div className="inner-wrap">
    //     <div
    //       className="animation"
    //       data-animation-config='{"name":"interstellar","fps":25,"background":"#ffffff","foreground":["#222223"]}'
    //       data-mutation-identifier="Contrast"

    //     >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="135 97 280 280"
      height={height}
      // width={width}
      style={{
        // backgroundColor: "var(--mainBG)",
        fill: "none",
        strokeWidth: 2,
        strokeLinejoin: "round",
        strokeDasharray: "80 20",
        strokeDashoffset: 0,
        animation: "stroke 6000ms infinite linear",
      }}
    >
      <defs
        style={{
          WebkitAnimationPlayState: "running",
          animationPlayState: "running",
        }}
      >
        <g
          style={{
            mixBlendMode: "normal",
            WebkitAnimationPlayState: "running",
            animationPlayState: "running",
          }}
        >
          <g
            data-paper-data='{"isGlobalGroup":true,"bounds":{"x":150.42610233186122,"y":106.00000000000003,"width":249.14779533627757,"height":258}}'
            style={{
              WebkitAnimationPlayState: "running",
              animationPlayState: "running",
            }}
            id="interstellar-group"
            fillRule="none"
            fontFamily="none"
            fontSize="none"
            fontWeight="none"
            textAnchor="none"
          >
            <g data-paper-data='{"fillRule":"nonzero","fillRuleOriginal":"nonzero","isIcon":true,"iconStyle":"standalone","selectedEffects":{"container":"circle_simple_outline3","transformation":"","pattern":""},"bounds":{"x":181.6982667271801,"y":141.6146458570007,"width":186.5683698987707,"height":186.5686124379548},"widthRatioIconToContainer":0.7384505596057636,"heightRatioIconToContainer":0.6087795536777787,"relativeBoundsIconToContainer":{"top":0.021583648503073007,"left":-1.3013679239870797e-7},"iconType":"initial","initialText":"WM","rawInitialId":543,"blockLetter":"O","monogramSpecial":"melted-letters","suitableAsStandaloneIcon":true}'>
              <path
                d="M255.73 248.807l-15.446-55.313.795 102.221h-9.2V182.136h14.198c4.316 15.447 9.427 32.938 14.083 48.84zm47.704-66.67h14.197v113.578h-8.859l.568-101.994-15.333 55.086-4.316-17.832zm-72.577 68.147l-24.76-53.383h10.449l14.31 31.575zm77.007 24.306l-3.18 6.474h-12.38l-17.606-67.353-17.604 67.353h-12.38l-2.613-6.474-.113-21.58 9.086 18.854 18.627-74.963h10.336l.113.114 18.514 74.849 9.086-18.854zm10.79-24.306l-.114-20.785 14.879-32.598h10.45zm-40.321 45.431h-9.654c-1.817-7.837-4.43-17.15-7.27-27.031l4.544-17.378c3.862 13.402 6.928 24.306 8.064 29.871h.227l8.973-30.553 4.089 15.674zm-69.312-126.778c8.606-8.606 18.49-15.27 29.65-19.99 11.557-4.888 23.66-7.332 36.311-7.332s24.755 2.444 36.312 7.332c11.16 4.72 21.044 11.384 29.65 19.99 8.606 8.606 15.27 18.49 19.99 29.65 4.889 11.557 7.333 23.661 7.333 36.312 0 12.65-2.444 24.754-7.333 36.311-4.72 11.161-11.384 21.045-19.99 29.65-8.606 8.607-18.49 15.27-29.65 19.99-11.557 4.89-23.66 7.333-36.312 7.333-12.65 0-24.754-2.444-36.311-7.332-11.16-4.72-21.044-11.384-29.65-19.99-8.607-8.606-15.27-18.49-19.99-29.65-4.889-11.557-7.333-23.661-7.333-36.312 0-12.65 2.444-24.755 7.333-36.312 4.72-11.16 11.383-21.044 19.99-29.65zm5.074 126.85c7.946 7.946 17.07 14.098 27.371 18.455 10.664 4.51 21.836 6.765 33.516 6.765 11.681 0 22.853-2.255 33.517-6.765 10.301-4.357 19.425-10.509 27.372-18.455 7.946-7.946 14.097-17.07 18.454-27.372 4.51-10.663 6.766-21.835 6.766-33.516 0-11.68-2.255-22.853-6.766-33.516-4.357-10.302-10.508-19.426-18.454-27.372-7.947-7.946-17.07-14.098-27.372-18.455-10.664-4.51-21.836-6.766-33.517-6.766-11.68 0-22.852 2.255-33.516 6.766-10.301 4.357-19.425 10.509-27.371 18.455-7.947 7.946-14.099 17.07-18.456 27.372-4.51 10.663-6.765 21.835-6.765 33.516 0 11.68 2.255 22.853 6.765 33.516 4.357 10.301 10.51 19.425 18.456 27.372z"
                data-paper-data='{"isPathIcon":true}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
                fillRule="nonzero"
              ></path>
            </g>
            <g
              fillRule="nonzero"
              data-paper-data='{"isPrimaryText":true}'
              style={{
                WebkitAnimationPlayState: "running",
                animationPlayState: "running",
              }}
            >
              <path
                d="M159.053 193.066c1.157.952 2.327 1.919 3.512 2.9 1.185.982 2.347 1.939 3.485 2.87l-.962 2.666-14.593.001 1.167-3.237 8.655.03-6.665-5.495 1.086-3.012 8.625.058-6.683-5.5 1.174-3.255 11.235 9.314-.955 2.648z"
                data-paper-data='{"glyphName":"W","glyphIndex":0,"firstGlyphOfWord":true,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M165.13 167.315a.517.517 0 01.061-.081.63.63 0 00.07-.097l.039-.063c.032-.052.085-.12.158-.205.074-.085.151-.17.233-.257.082-.086.16-.167.236-.243.075-.077.128-.127.158-.152l-.01.016a5.227 5.227 0 011.79-1.158 5.942 5.942 0 012.054-.392 7.171 7.171 0 012.17.316c.735.22 1.448.543 2.138.966.816.5 1.519 1.09 2.11 1.77.59.679 1.025 1.409 1.301 2.19.276.781.377 1.591.301 2.43-.075.839-.366 1.671-.873 2.497-.507.827-1.117 1.463-1.83 1.911a5.583 5.583 0 01-2.298.825 6.86 6.86 0 01-2.538-.175 9.031 9.031 0 01-2.533-1.079 9.031 9.031 0 01-2.11-1.769 6.755 6.755 0 01-1.298-2.178 5.631 5.631 0 01-.298-2.417c.075-.839.366-1.671.873-2.498zm2.587 1.803c-.25.408-.37.824-.357 1.25.013.424.12.832.32 1.22.2.39.468.756.805 1.099.336.343.698.633 1.085.87.356.219.757.404 1.203.555.447.152.893.235 1.338.249.445.013.867-.066 1.268-.237.4-.172.735-.478 1.004-.917.27-.44.392-.879.367-1.319a3 3 0 00-.354-1.253 4.232 4.232 0 00-.827-1.08 6.311 6.311 0 00-1.045-.813 5.835 5.835 0 00-1.196-.55 4.601 4.601 0 00-1.33-.243 2.905 2.905 0 00-1.272.244c-.404.177-.74.485-1.01.925z"
                data-paper-data='{"glyphName":"O","glyphIndex":1,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M174.194 154.518l2.2-2.525 8.708 1.63-5.759-5.016 2.14-2.456 10.352 9.017-2.225 2.554-8.574-1.588a783.39 783.39 0 012.845 2.491c.954.839 1.888 1.657 2.804 2.455l-2.14 2.456z"
                data-paper-data='{"glyphName":"N","glyphIndex":2,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M188.965 138.885l3.437-2.832c.72-.593 1.468-1.015 2.246-1.267a5.251 5.251 0 012.349-.218c.787.107 1.563.393 2.329.859.765.466 1.5 1.125 2.201 1.977.656.796 1.136 1.616 1.443 2.46.306.844.437 1.674.394 2.49a5.725 5.725 0 01-.645 2.342c-.386.748-.943 1.422-1.672 2.022l-3.352 2.762zm4.515.357l4.728 5.738.923-.76c.34-.281.594-.606.76-.973.167-.367.246-.758.238-1.173a3.425 3.425 0 00-.295-1.284 5.45 5.45 0 00-.82-1.314c-.757-.919-1.535-1.462-2.334-1.63-.798-.17-1.557.043-2.277.636z"
                data-paper-data='{"glyphName":"D","glyphIndex":3,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M211.993 131.906l1.268 2.115 4.703-2.82 1.618 2.7-7.497 4.494-7.059-11.775 7.403-4.438 1.618 2.7-4.609 2.762.937 1.563 4.435-2.659 1.618 2.7z"
                data-paper-data='{"glyphName":"E","glyphIndex":4,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M225.803 115.87c.819-.332 1.565-.5 2.24-.5.674-.003 1.275.118 1.804.36.528.243.985.587 1.371 1.033.386.446.694.954.924 1.522.327.808.465 1.596.412 2.365a4.048 4.048 0 01-.748 2.1c.41.258.846.528 1.31.81a379.208 379.208 0 012.8 1.715c.451.28.88.544 1.283.79l-3.65 1.479-4.56-2.879-1.16.47 1.644 4.06-3.02 1.222-5.153-12.724zm-.303 3.517l1.14 2.814 1.587-.642c.284-.115.508-.249.671-.401a1.22 1.22 0 00.336-.494c.061-.177.078-.362.052-.557a2.462 2.462 0 00-.163-.599c-.175-.432-.43-.72-.765-.861-.336-.142-.72-.126-1.152.05z"
                data-paper-data='{"glyphName":"R","glyphIndex":5,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M239.614 110.922l3.159-.797 2.588 10.26 4.497-1.134.77 3.051-7.655 1.932z"
                data-paper-data='{"glyphName":"L","glyphIndex":6,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M269.104 119.85l-3.421.368-1.519-3.094-3.787.409-.86 3.35-3.404.367c.209-.813.395-1.545.56-2.198.163-.654.323-1.288.48-1.903l.472-1.883c.159-.64.332-1.35.52-2.13.187-.779.401-1.66.64-2.641.24-.982.518-2.126.834-3.431l3.019-.325zm-7.966-5.565l1.573-.17a68.38 68.38 0 00-.258-.508 23.176 23.176 0 01-.224-.448c-.072-.146-.15-.308-.238-.483a46.986 46.986 0 01-.297-.616z"
                data-paper-data='{"glyphName":"A","glyphIndex":7,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M276.53 106l3.345.183 4.065 7.872.418-7.626 3.253.178-.752 13.708-3.38-.185-4.018-7.74a783.14 783.14 0 01-.216 3.776 772.497 772.497 0 00-.213 3.72l-3.253-.178z"
                data-paper-data='{"glyphName":"N","glyphIndex":8,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M297.943 108.043l4.346.972c.91.203 1.703.535 2.38.994a5.252 5.252 0 011.614 1.72c.4.686.651 1.474.754 2.364.102.89.033 1.875-.208 2.952-.225 1.006-.577 1.89-1.055 2.65s-1.052 1.373-1.722 1.84a5.725 5.725 0 01-2.245.93c-.826.155-1.7.13-2.623-.077l-4.238-.948zm2.492 3.782l-1.623 7.255 1.167.261c.431.097.843.097 1.235.003.392-.095.749-.273 1.071-.534.323-.26.6-.6.832-1.02.232-.42.41-.905.533-1.456.26-1.161.211-2.109-.147-2.842-.357-.734-.99-1.203-1.9-1.406z"
                data-paper-data='{"glyphName":"D","glyphIndex":9,"lastGlyphOfWord":true,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M330.216 130.234l-.112-4.27-3.353 6.18-2.863-1.554 6.548-12.066 2.765 1.5.154 7.203a389.89 389.89 0 013.09-1.894c1.05-.637 2.072-1.266 3.065-1.885l2.75 1.492-6.548 12.066-2.847-1.545 3.344-6.162c-.628.385-1.276.776-1.946 1.174-.67.397-1.304.789-1.904 1.175l-2.297-1.246z"
                data-paper-data='{"glyphName":"M","glyphIndex":10,"firstGlyphOfWord":true,"word":2}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M351.573 148.85l-2.697-2.139 1.09-3.27-2.985-2.367-2.964 1.783-2.682-2.126a429.62 429.62 0 001.941-1.174l1.677-1.019a290.102 290.102 0 003.523-2.162c.68-.423 1.45-.9 2.31-1.432.86-.532 1.86-1.151 3.002-1.86l2.379 1.887zm-1.771-9.555l1.24.983c.064-.2.122-.38.173-.544.051-.163.103-.321.155-.476l.17-.51c.061-.187.135-.403.22-.648z"
                data-paper-data='{"glyphName":"A","glyphIndex":11,"word":2}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M369.868 147.822c.592.655 1.006 1.299 1.239 1.931.233.633.327 1.24.28 1.819a4.004 4.004 0 01-.498 1.643c-.287.515-.657.979-1.112 1.39-.646.585-1.339.985-2.08 1.2a4.048 4.048 0 01-2.228.019c-.102.472-.205.975-.31 1.509a379.478 379.478 0 01-.649 3.218c-.108.52-.209 1.012-.301 1.477l-2.643-2.92 1.136-5.272-.84-.928-3.247 2.939-2.186-2.415 10.179-9.212zm-3.408.924l-2.251 2.038 1.148 1.269c.206.227.409.391.608.493.199.1.392.15.579.146.187-.004.367-.051.54-.143.175-.09.344-.21.507-.359.346-.313.528-.651.546-1.015.018-.364-.13-.719-.442-1.064z"
                data-paper-data='{"glyphName":"R","glyphIndex":12,"word":2}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M374.247 176.426l-2.33-3.534 1.696-5.989-3.933 2.593-1.793-2.72 11.463-7.554 1.793 2.72-3.56 2.323 5.565.719 2.309 3.503-8.63-1.122z"
                data-paper-data='{"glyphName":"K","glyphIndex":13,"word":2}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M383.84 182.677l-2.234 1.045 2.325 4.967-2.85 1.334-3.705-7.917 12.434-5.82 3.658 7.818-2.85 1.334-2.278-4.867-1.65.772 2.192 4.684-2.85 1.334z"
                data-paper-data='{"glyphName":"E","glyphIndex":14,"word":2}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M396.615 192.19l2.959 9.621-3.008.925-.995-3.236-10.114 3.11-.958-3.113 10.114-3.11-1.006-3.272z"
                data-paper-data='{"glyphName":"T","glyphIndex":15,"lastGlyphOfWord":true,"word":2}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
            </g>
            <g
              fillRule="nonzero"
              data-paper-data='{"isMirroredPrimaryText":true}'
              style={{
                WebkitAnimationPlayState: "running",
                animationPlayState: "running",
              }}
            >
              <path
                d="M162.013 275.664c-1.498.005-3.016.008-4.555.009-1.538 0-3.043.005-4.514.013l-.96-2.666 11.235-9.313 1.167 3.238-6.683 5.5 8.638-.024 1.086 3.013-6.678 5.46 8.655-.03 1.174 3.254h-14.594l-.955-2.65z"
                data-paper-data='{"glyphName":"W","glyphIndex":0,"firstGlyphOfWord":true,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M177.005 295.199c.02.03.034.061.045.09.011.03.03.066.055.107l.038.063c.033.052.07.13.112.234.042.104.083.212.123.324.04.112.077.22.11.32.034.103.055.172.064.21l-.01-.016c.222.714.295 1.42.221 2.12-.074.701-.268 1.37-.581 2.01a7.171 7.171 0 01-1.266 1.79 9.068 9.068 0 01-1.83 1.468c-.816.5-1.66.86-2.534 1.08a6.765 6.765 0 01-2.542.166 5.675 5.675 0 01-2.302-.833c-.714-.447-1.324-1.084-1.83-1.91-.508-.826-.799-1.659-.874-2.498a5.583 5.583 0 01.306-2.422 6.86 6.86 0 011.306-2.183 9.032 9.032 0 012.11-1.769c.815-.5 1.66-.86 2.533-1.079a6.754 6.754 0 012.53-.17 5.631 5.631 0 012.29.83c.713.448 1.323 1.084 1.83 1.91zm-2.778 1.488c-.25-.408-.568-.702-.953-.884a2.823 2.823 0 00-1.233-.269 4.535 4.535 0 00-1.344.22 5.675 5.675 0 00-1.268.573 5.955 5.955 0 00-1.04.821c-.338.33-.614.69-.827 1.08-.214.39-.336.803-.364 1.237-.028.435.092.872.362 1.311.269.44.606.748 1.01.925a3 3 0 001.277.252 4.232 4.232 0 001.337-.248 6.31 6.31 0 001.199-.562c.355-.218.7-.49 1.032-.817.332-.326.605-.684.82-1.075.213-.39.333-.805.358-1.245.025-.44-.097-.88-.366-1.319z"
                data-paper-data='{"glyphName":"O","glyphIndex":1,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M184.393 306.395l2.2 2.526-2.81 8.402 5.76-5.017 2.139 2.456-10.352 9.018-2.224-2.553 2.749-8.276c-.944.822-1.897 1.647-2.858 2.477-.962.83-1.9 1.643-2.816 2.44l-2.14-2.456z"
                data-paper-data='{"glyphName":"N","glyphIndex":2,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M197.566 320.474l3.437 2.832c.72.593 1.278 1.247 1.674 1.963.395.716.616 1.47.662 2.263.046.793-.086 1.61-.397 2.45-.311.84-.818 1.687-1.52 2.54-.655.795-1.368 1.423-2.139 1.886-.77.462-1.56.75-2.368.862a5.725 5.725 0 01-2.423-.184c-.807-.236-1.575-.655-2.304-1.255l-3.352-2.762zm.513 4.5l-4.728 5.738.923.76c.341.281.708.468 1.1.56.393.094.792.097 1.197.01a3.425 3.425 0 001.204-.535 5.45 5.45 0 001.133-1.057c.757-.918 1.142-1.786 1.154-2.602.013-.816-.34-1.52-1.06-2.113z"
                data-paper-data='{"glyphName":"D","glyphIndex":3,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M210.602 340.212l-1.268 2.115 4.704 2.82-1.618 2.7-7.498-4.495 7.059-11.775 7.402 4.437-1.618 2.7-4.609-2.763-.936 1.562 4.435 2.659-1.618 2.699z"
                data-paper-data='{"glyphName":"E","glyphIndex":4,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M230.88 341.392c.82.331 1.471.731 1.957 1.2.485.467.834.972 1.044 1.514.21.542.3 1.108.266 1.696a5.412 5.412 0 01-.395 1.736c-.327.808-.777 1.47-1.35 1.985a4.048 4.048 0 01-1.998.988c.114.47.24.967.378 1.493a377.678 377.678 0 01.817 3.18c.128.515.252 1.002.37 1.46l-3.65-1.478-1.272-5.24-1.16-.47-1.644 4.06-3.019-1.223 5.153-12.725zm-2.665 2.316l-1.14 2.814 1.587.642c.284.116.538.175.761.18a1.22 1.22 0 00.585-.12c.167-.086.308-.207.425-.365.117-.157.217-.339.3-.543.175-.433.191-.816.05-1.152-.143-.335-.43-.59-.862-.766z"
                data-paper-data='{"glyphName":"R","glyphIndex":5,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M242.923 345.76l3.159.797-2.589 10.26 4.497 1.135-.77 3.051-7.655-1.931z"
                data-paper-data='{"glyphName":"L","glyphIndex":6,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M267.611 363.799l-3.421-.369-.824-3.346-3.788-.408-1.554 3.09-3.403-.367c.376-.75.715-1.425 1.014-2.029l.874-1.756a289.618 289.618 0 001.825-3.709c.35-.721.746-1.536 1.19-2.445.443-.908.958-1.966 1.544-3.174l3.02.325zm-6.598-7.134l1.574.17a68.38 68.38 0 00-.144-.553 23.19 23.19 0 01-.124-.485 92.152 92.152 0 00-.128-.523c-.048-.19-.101-.412-.16-.665z"
                data-paper-data='{"glyphName":"A","glyphIndex":7,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M275.79 350.292l3.344-.183 4.902 7.38-.418-7.626 3.252-.178.752 13.708-3.381.185-4.84-7.254c.069 1.25.135 2.508.198 3.776.063 1.268.128 2.509.195 3.722l-3.253.178z"
                data-paper-data='{"glyphName":"N","glyphIndex":8,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M294.99 348.556l4.346-.973c.91-.203 1.77-.241 2.577-.114a5.252 5.252 0 012.193.867c.654.451 1.217 1.057 1.69 1.82.471.761.828 1.68 1.069 2.758.225 1.006.283 1.955.175 2.846-.109.892-.367 1.691-.774 2.399a5.725 5.725 0 01-1.635 1.798c-.682.492-1.483.842-2.405 1.048l-4.239.948zm3.866 2.36l1.623 7.255 1.167-.261c.431-.097.804-.271 1.118-.524.315-.252.562-.566.743-.94.18-.373.286-.799.317-1.277a5.45 5.45 0 00-.138-1.544c-.26-1.161-.707-1.997-1.344-2.509-.636-.511-1.409-.665-2.319-.462z"
                data-paper-data='{"glyphName":"D","glyphIndex":9,"lastGlyphOfWord":true,"word":1}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M333.683 345.953l-3.64-2.233 3.352 6.179-2.863 1.553-6.548-12.066 2.766-1.501 6.122 3.797c.026-1.187.059-2.395.097-3.623.039-1.228.068-2.427.09-3.597l2.75-1.492 6.547 12.066-2.847 1.545-3.344-6.163c-.02.737-.045 1.494-.076 2.272-.032.777-.05 1.523-.053 2.237l-2.297 1.246z"
                data-paper-data='{"glyphName":"M","glyphIndex":10,"firstGlyphOfWord":true,"word":2}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M360.229 331.863l-2.696 2.139-2.936-1.806-2.984 2.367 1.06 3.292-2.681 2.127a430.52 430.52 0 00-.701-2.157l-.61-1.865a289.55 289.55 0 00-1.303-3.923c-.257-.758-.547-1.617-.868-2.576-.322-.958-.697-2.073-1.127-3.345l2.38-1.887zm-9.707-.452l1.24-.983c-.18-.108-.343-.206-.49-.292-.147-.087-.29-.174-.428-.26l-.46-.282c-.166-.102-.36-.223-.58-.361z"
                data-paper-data='{"glyphName":"A","glyphIndex":11,"word":2}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M359.839 312.9c.593-.655 1.192-1.13 1.799-1.425.606-.295 1.2-.449 1.781-.46.582-.012 1.143.099 1.684.333.542.233 1.04.556 1.495.967.646.585 1.112 1.235 1.4 1.95.288.715.368 1.454.24 2.216.481.054.992.107 1.533.158a380.11 380.11 0 013.267.326c.528.056 1.028.107 1.5.153l-2.643 2.92-5.36-.606-.839.928 3.247 2.939-2.185 2.415-10.179-9.212zm1.259 3.299l2.251 2.037 1.149-1.269c.205-.227.349-.445.43-.653.08-.208.11-.405.087-.59a1.204 1.204 0 00-.195-.525 2.461 2.461 0 00-.408-.469c-.345-.312-.7-.46-1.064-.442-.364.019-.702.2-1.015.546z"
                data-paper-data='{"glyphName":"R","glyphIndex":12,"word":2}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M385.879 301.038l-2.33 3.534-6.171.803 3.934 2.593-1.793 2.72-11.463-7.555 1.793-2.72 3.54 2.355-1.535-5.397 2.309-3.503 2.371 8.373z"
                data-paper-data='{"glyphName":"K","glyphIndex":13,"word":2}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M386.29 288.268l2.234 1.045 2.324-4.967 2.85 1.334-3.705 7.917-12.434-5.82 3.658-7.816 2.85 1.334-2.277 4.867 1.65.772 2.192-4.684 2.85 1.334z"
                data-paper-data='{"glyphName":"E","glyphIndex":14,"word":2}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
              <path
                d="M383.686 273.632l2.96-9.622 3.007.925-.995 3.237 10.114 3.11-.958 3.114-10.114-3.11-1.006 3.271z"
                data-paper-data='{"glyphName":"T","glyphIndex":15,"lastGlyphOfWord":true,"word":2}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
              ></path>
            </g>
            <g data-paper-data='{"isContainerElementsWrapper":true}'>
              <path
                d="M153.275 208.199c-1.9 8.687-2.849 17.587-2.849 26.7 0 7.944.722 15.726 2.165 23.346h3.075c-1.48-7.616-2.22-15.398-2.22-23.346 0-9.12.974-18.02 2.923-26.7zm240.322 0h3.094c1.899 8.687 2.848 17.587 2.848 26.7 0 7.944-.722 15.726-2.165 23.346h-3.075c1.48-7.616 2.22-15.398 2.22-23.346 0-9.12-.973-18.02-2.922-26.7z"
                data-paper-data='{"isJbensonConnector":true}'
                style={{
                  WebkitAnimationPlayState: "running",
                  animationPlayState: "running",
                }}
                fillRule="evenodd"
              ></path>
            </g>
          </g>
        </g>
      </defs>
      <use

        stroke="#cccccc"
        className="strokeItem"
        href="#interstellar-group"
        style={{
          WebkitAnimationDelay: "0ms",
          animationDelay: "0ms",
          WebkitAnimationPlayState: "running",
          animationPlayState: "running",
        }}
      >
      </use>
      <style>{animationKeyframes}</style>
    </svg>
    //     </div>
    //   </div>
    // </div>
  );
}
export default LogoBW2;
