export type AppUser = {
  id: string;
  email: string;
  name: string;
  avatar: string;
  role: string;
};

export const assertAppUser: (data: any) => asserts data is AppUser = (data) => {
  const { id, email, name, avatar, role } = data;
  // if (!id || !email || !name || !avatar || !role) {
  if (!name) {
    throw new TypeError(`Invalid AppUser object: ${JSON.stringify(data)}`);
  }
};
