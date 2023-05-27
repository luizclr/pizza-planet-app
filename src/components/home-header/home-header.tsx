import { ReactElement } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { View } from "react-native";

import {
  ChangeLocationIconContainer,
  Container,
  LocationAddressContainer,
  LocationAddressText,
  LocationContainer,
  LocationLabel,
  NotificationBadge,
  NotificationContainer,
} from "~/components/home-header/home-header.styles";

export const HomeHeader = (): ReactElement => (
  <Container>
    <LocationContainer>
      <View>
        <LocationLabel>Current location</LocationLabel>
        <LocationAddressContainer>
          <FontAwesome5 name="map-marker-alt" size={15} color="#e00000" />
          <LocationAddressText>Ismael Pereira, 1535</LocationAddressText>
        </LocationAddressContainer>
      </View>
      <ChangeLocationIconContainer>
        <FontAwesome5 name="chevron-down" size={15} color="#ffa500" />
      </ChangeLocationIconContainer>
    </LocationContainer>
    <NotificationContainer>
      <FontAwesome5 name="bell" size={20} color="#ffa500" />
      <NotificationBadge>3</NotificationBadge>
    </NotificationContainer>
  </Container>
);
