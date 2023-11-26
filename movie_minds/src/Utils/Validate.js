import { VALIDATION_REG_EX } from "./Constants/Constants";

export const checkValidData = (email, password) => {
  const isEmailValid = VALIDATION_REG_EX["EMAIL"].test(email);
  const isPasswordValid = VALIDATION_REG_EX["PASSWORD"].test(password);

  if (!isEmailValid) return <p className="text-xs md:text-sm md:h-10 overflow-y-auto">Email ID is invalid. It should contain the '@' symbol and end with '@gmail.com', '@email.com', '...'</p>;
  if (!isPasswordValid)
    return (
        <p className="text-xs md:text-sm md:h-10 overflow-y-auto">
            Password is invalid. Your password must be at least 8 characters long and include at least
            one uppercase letter, one lowercase letter, one numeric digit, and one
            special character (e.g., !, @, #, $, %, ^, &). Avoid using easily
            guessable information such as your name or birthdate.
        </p>
        )

  return null;
};
