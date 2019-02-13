import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";
import ToastNotification from "../src/components/toastNotification/toastNotificationView";
import { expect } from "chai";

describe("<ToastNotification />", () => {
  it("should render text content", () => {
    const wrapper = shallow(<ToastNotification />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.contains(<Text>Hello There</Text>)).to.equal(true);
  });
});
