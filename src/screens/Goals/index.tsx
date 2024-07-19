import {ScreenContainer} from '@components/ScreenContainer';
import React, {memo} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

export const GoalsScreen = memo(() => {
  return (
    <ScreenContainer>
      <Text>GoalsScreen</Text>
    </ScreenContainer>
  );
});

const Text = styled.Text`
  color: ${({theme}) => theme.colors.text};
`;
