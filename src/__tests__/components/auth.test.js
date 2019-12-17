import { validateForm } from "../../components/auth/SignIn";
import { USERNAME_ERROR, PASSWORD_ERROR } from "../../constants/error";

describe("Sign In Component", () => {
  it("Should Not accept Empty Username", () => {
    const response = validateForm(null, "admin1234");
    expect(response).toBe(USERNAME_ERROR);

    const response2 = validateForm("", "admin12345");
    expect(response2).toBe(USERNAME_ERROR);
  });

  it("Should Not accept Empty Password", () => {
    const response = validateForm("admin", null);
    expect(response).toBe(PASSWORD_ERROR);

    const response2 = validateForm("admin", "");
    expect(response2).toBe(PASSWORD_ERROR);
  });
});
