import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Button, Flex, Heading, keyframes } from '@chakra-ui/react';
import { useState } from 'react';

const Home: NextPage = () => {
  const [clickNum, setClickNum] = useState(0);
  const movings = [...Array(10)].map((_, i) => {
    return keyframes`
    0% {
      opacity: 0;
      transform: translate(0, 0);
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(${!!Math.floor(Math.random() * 2) && '-'}${Math.floor(
      Math.random() * 200
    )}px, 100vh);
    }
  `;
  });
  const rotateY = keyframes`
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  `;
  const rotate360 = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;
  const colors = [
    '#3181A8',
    '#FCEE3D',
    '#D4297E',
    '#D94724',
    '#93CBCE',
    '#3D9148',
    '#E79549',
    '#E397AD',
    '#93CBCE',
    '#D2B155',
    '#AC7DB1',
    '#F5C532',
  ];
  return (
    <>
      <Head>
        <title>??????</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="noindex" />
      </Head>
      <Box minWidth={'100%'} minHeight={'100vh'} position={'relative'} overflow={'hidden'}>
        <Flex
          position={'absolute'}
          inset={'0'}
          alignItems={'center'}
          justifyContent={'center'}
          fontFamily={"'Noto Sans JP', sans-serif"}
          fontWeight={'700'}
          fontSize={'10vw'}
        >
          <Button
            variant={'ghost'}
            onClick={() => {
              setClickNum((value) => {
                return value + 1;
              });
            }}
            transform={
              clickNum >= 12 ? 'rotate(1080deg)' : clickNum >= 8 ? 'rotate(10deg)' : undefined
            }
            transition={
              clickNum >= 11
                ? 'transform 1s ease-in-out'
                : 'transform 0.5s cubic-bezier(.75,.01,.29,1.71)'
            }
          >
            {(() => {
              switch (clickNum) {
                case 0:
                case 1:
                case 2:
                case 3:
                  return 'ホームページ';
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                  return 'ホームページ？';

                default:
                  return '法務ページ！';
              }
            })()}
          </Button>
        </Flex>
        {clickNum >= 12 &&
          [...Array(100)].map((_, i) => {
            const animationDuration = Math.floor(Math.random() * 2300) + 1900;
            const animationDelay = Math.floor(Math.random() * 2300) + 900;
            return (
              <Box
                position={'absolute'}
                key={i + 'animation'}
                top={'-20px'}
                left={`${Math.floor(Math.random() * 100)}%`}
                width={`${Math.floor(Math.random() * 10 + 4)}px`}
                height={`${Math.floor(Math.random() * 10 + 4)}px`}
                animation={`${
                  movings[Math.floor(Math.random() * 9)]
                } ${animationDuration}ms linear ${animationDelay}ms infinite`}
              >
                <Box
                  transform={`rotate(${Math.floor(Math.random() * 180)})`}
                  width={'100%'}
                  height={'100%'}
                >
                  <Box
                    width={'100%'}
                    height={'100%'}
                    backgroundColor={colors[Math.floor(Math.random() * 12)]}
                    animation={`${
                      Math.floor(Math.random() * 2) ? rotateY : rotate360
                    } ${animationDuration}ms linear ${animationDelay}ms infinite`}
                  />
                </Box>
              </Box>
            );
          })}
      </Box>
    </>
  );
};

export default Home;
