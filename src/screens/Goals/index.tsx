import {ScreenContainer} from '@components/ScreenContainer';
import i18next from 'i18next';
import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';

export const GoalsScreen = memo(() => {
  const {t} = useTranslation();

  return (
    <ScreenContainer>
      <Text>{t('goals.form.abstract.question')}</Text>
    </ScreenContainer>
  );
});

const Text = styled.Text`
  color: ${({theme}) => theme.colors.text};
`;
