// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const userProfile = {
    id:        'TEST_ID',
    avatar:    'TEST_AVATAR',
    firstName: 'Walter',
    lastName:  'White',
    token,
};

const users = ['user1', 'user2', 'user3', 'user4'];

const credentials = {
    email:    'test@email.com',
    password: '1111',
    remember: true,
};

const responseDataSuccess = {
    data:    userProfile,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = 'https://www.url.com';

const newName = {
    firstName: 'Justin',
    lastName:  'Case',
};

const newAvatar = ['avatar'];

const newPassword = {
    oldPassword: 12345,
    newPassword: 123456,
};

const fillUsers = [
    {
        id:        'TEST_ID',
        avatar:    'TEST_AVATAR',
        firstName: 'Walter',
        lastName:  'White',
    },
    {
        id:        'TEST_ID2',
        avatar:    'TEST_AVATAR2',
        firstName: 'Walter2',
        lastName:  'White2',
    },
    {
        id:        'TEST_ID3',
        avatar:    'TEST_AVATAR3',
        firstName: 'Walter3',
        lastName:  'White3',
    }
];

const responseDataSuccess2 = {
    data:    fillUsers,
    message: successMesasge,
};

global.__ = {
    userProfile,
    users,
    errorMessage,
    token,
    error,
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseFail401,
    fetchResponseFail400,
    credentials,
    url,
    newName,
    newAvatar,
    newPassword,
    responseDataSuccess2,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
