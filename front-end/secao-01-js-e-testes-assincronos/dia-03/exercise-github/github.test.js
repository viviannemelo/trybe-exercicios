const { describe, it, default: test } = require('node:test');
const { getGitHubUserInfos } = require('./github');

describe('Quando a função getGitHubUsersInfos for chamada', () => {
    const expectedValue = {
        name: 'Gabriel Oliva',
        company: '@betrybe',
        twitter: 'gfpoliva',
        bio: 'Software engineer passionate for mobile development and software architecture. CocoaHeads Belo Horizonte chapter leader.',
        location: 'Belo Horizonte'
    }

    test('Se retorna um objeto contendo name, company, twitter, bio e location', async () => {
        const result = await getGitHubUserInfos('gfpoliva');
        expectedValue(result).toEqual(expectedValue);
    });
    test('', () => {
        return getGitHubUserInfos('gfpoliva').then((result) => {
            expect(result).toEqual(expectedValue);
        });
    });
});