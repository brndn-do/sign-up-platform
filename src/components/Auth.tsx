interface AuthProps {
  user?: {
    uid: string;
    name: string;
    email: string;
  };
  onSignIn: () => void;
  onSignOut: () => void;
}

const Auth = ({ user, onSignIn, onSignOut }: AuthProps) => {
  if (!user) {
    return (
      <button
        type="button"
        onClick={onSignIn}
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 hover:cursor-pointer"
      >
        Sign in with Google
      </button>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{`Hi, ${user.name}`}</h2>
      <button
        type="button"
        onClick={onSignOut}
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 hover:cursor-pointer"
      >
        Sign out
      </button>
    </div>
  );
};

export default Auth;
