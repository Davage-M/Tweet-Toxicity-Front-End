
export async function getTweetData() {
    let controller = new AbortController();
    const twitterHandle = document.getElementById('twitterInput').value;
    //console.log(`Twitter Handle = ${twitterHandle}`);
    console.log(`Fetching Data for ${twitterHandle}.........`);
    try {
        setTimeout(() => controller.abort(), 20000);
        const response = await fetch(
            `http://localhost:59001/?tHandle=${twitterHandle}`,
            {
                signal: controller.signal
            }
        );
        console.log(response)
        if (!(response.ok)) {
            console.log("Response is not ok!");
            throw "Response is not ok! User prob not found :(";
        }
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
        return;
    }
}

export function parseAnalyzedData(analyzedData) {
    let finalString = "";

    for (const data of analyzedData) {
        let tweet = data.text;
        let id = data.id;
        let isIdentityAttack = data.label.identity_attack;
        let isInsult = data.label.insult;
        let isObscene = data.label.obscene;
        let isSevereToxicity = data.label.severe_toxicity;
        let isSexualExplicit = data.label.sexual_explicit;
        let isThreat = data.label.threat;
        let isToxic = data.label.toxicity;
        let tentativeString = `Analyzed Tweet: ${tweet}\n Id: ${id}\nIdentity Attack: ${isIdentityAttack}\nInsult: ${isInsult}\nObscene: ${isObscene}\nSevere Toxicity: ${isSevereToxicity}\nSexual Explicit: ${isSexualExplicit}\nThreat: ${isThreat}\nToxic: ${isToxic}\n\n------------\n\n`;

        if (isToxic) {
            finalString += tentativeString;
        }

    }
    if (!(finalString)) {
        return "Looks like this user has no toxic tweets";
    }
    return finalString;
}
