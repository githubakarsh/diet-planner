
const domain = "http://localhost:3004";

const apiEndpoints =  {
    "food" : '/food',
};

export const apiBuilder = (apiFinder) => {
    return `${domain}${apiEndpoints[apiFinder]}`;
}

export const GET = 'GET';
export const PUT = 'PUT';
export const POST = 'POST';
export const DELETE = 'DELETE';