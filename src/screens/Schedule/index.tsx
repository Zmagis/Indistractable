import {ScreenContainer} from '@components/ScreenContainer';
import React, {memo} from 'react';
import styled from 'styled-components/native';

export const ScheduleScreen = memo(() => {
  return (
    <ScreenContainer>
      <Text>ScheduleScreen</Text>
    </ScreenContainer>
  );
});

const Text = styled.Text`
  color: ${({theme}) => theme.colors.text};
`;
