export async function getTweetData(twitterHandle, pagination) {
    const twitterUsernameRegex = /^[a-z0-9_]{4,15}$/i;
    let controller = new AbortController();

    try {
        if (!(twitterHandle.match(twitterUsernameRegex))) {
            throw new Error("Invalid Username");
        }

        //setTimeout(() => controller.abort(), 300000);
        const response = await fetch(
            //`http://localhost:59000/search_tweets?twitter_handle=${twitterHandle}&pagination=${pagination}`,
            `https://tweet-toxicity-api.herokuapp.com/search_tweets?twitter_handle=${twitterHandle}&pagination=${pagination}`,
            {
                signal: controller.signal
            }
        );


        const json = await response.json();

        if (!(response.ok)) {
            throw new Error(json.error);
        }
        return json;

    } catch (error) {
        //console.error(error);
        return error.message;
    }
}

/*
{
    id:number
    label:object with bools
    text:string
}
*/
export function parseAnalyzedData(analyzedData) {
    let arrayWithTrue = [];
    console.log(analyzedData);
    for (const data of analyzedData) {
        for (const l in data.label) {
            if (data.label[l]) {
                arrayWithTrue.push(data);
                break;
            }
        }
    }

    try {
        if (!(arrayWithTrue.length > 0)) {
            throw new Error("User has no flagged tweets");
        }
        console.log(arrayWithTrue)
        return arrayWithTrue;
    }
    catch (e) {
        return e.message;
    }
}
