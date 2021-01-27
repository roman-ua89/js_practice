import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-ka" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-ka");
    });
    test("after creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="it-ka" />);
        let span = instance.findByType("span");
        expect(span.length).toBe(1);
    });
});