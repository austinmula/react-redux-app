import reducer from "../features/auth/authSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual([
    {
      isError: false,
      isLoading: false,
      isSuccess: false,
      message: "",
      user: null,
    },
  ]);
});
