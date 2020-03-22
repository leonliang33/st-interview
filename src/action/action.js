function saveData(payload) {
    return { type: "DOWNLOAD_DATA", payload }
};

const actions = {
    saveData
};

export default actions;