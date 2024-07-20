import {ScreenContainer} from '@components/ScreenContainer';
import React, {memo, useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';

export const GoalsScreen = memo(() => {
  const {t} = useTranslation();
  const animationRef = useRef<Lottie>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, [animationRef]);

  return (
    <ScreenContainer>
      <Text>{t('goals.form.abstract.question')}</Text>
      <Animation ref={animationRef} />
    </ScreenContainer>
  );
});

const Text = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Animation = styled(Lottie).attrs(() => ({
  loop: true,
  source: require('@assets/animations/Balance.json'),
  width: '100%',
  height: '100%',
}))``;
