import { render } from "@testing-library/react";
import { ActiveLink } from ".";

test("active link renders correctly", () => {
  render(
    <ActiveLink href="/" activeClassName="active">
      <a>home</a>
    </ActiveLink>
  );
});
