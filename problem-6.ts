interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (
  profile: Profile,
  updates: Partial<Profile>
): Profile => {
  return { ...profile, ...updates };
};

const myProfile = { name: "Hasan", age: 25, email: "hasan@gamil.com" };
console.log(updateProfile(myProfile, { age: 25 }));
