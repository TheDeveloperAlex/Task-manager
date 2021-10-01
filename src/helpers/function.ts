type TSetErrorStatus = (error: {message: string, other: any}) => { status: number, message: string };

export const setErrorStatus: TSetErrorStatus = (error) => {
  return {
    status: +error.message.slice(-3),
    message: error.message,
  };
};
