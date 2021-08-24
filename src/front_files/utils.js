
export async function getTweetData(twitterHandle) {
    const twitterUsernameRegex = /^[a-z0-9_]{4,15}$/i;
    let controller = new AbortController();
    //const twitterHandle = document.getElementById('twitterInput').value;
    /*
    console.log(twitterHandle.match(twitterUsernameRegex));
    if (!(twitterHandle.match(twitterUsernameRegex))) {
        console.log("Invalid Username");
        return;
    }
    */
    //console.log(`Twitter Handle = ${twitterHandle}`);
    console.log(`Fetching Data for ${twitterHandle}.........`);
    try {
        if (!(twitterHandle.match(twitterUsernameRegex))) {
            //console.log("Invlaid Username");
            throw new Error("Invalid Username");

        }
        setTimeout(() => controller.abort(), 20000);
        const response = await fetch(
            `http://localhost:59000/?tHandle=${twitterHandle}`,
            {
                signal: controller.signal
            }
        );
        console.log(response)
        if (!(response.ok)) {
            console.log("Response is not ok!");
            throw new Error("User may have not benn found or account may be private");
        }

        const json = await response.json();
        //console.log(json);
        return json;
    } catch (error) {
        console.error(error);
        return;
    }
}

/*
gets array of objects in the form of
{
    id:number
    label:object with bools
    text:string
}
*/
export function parseAnalyzedData(analyzedData) {
    let arrayWithTrue = [];

    for (const data of analyzedData) {
        for (const l in data.label) {
            //console.log(`${l}: ${data.label[l]}`);

            if (data.label[l]) {
                arrayWithTrue.push(data);
                break;
            }
        }
    }

    return arrayWithTrue;
}
