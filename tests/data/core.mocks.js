var mocker = require('mocker-data-generator').default;

function createMocker(...mocks) {
    const currentMocker = mocker();
    mocks.forEach(dataSchema => {
        currentMocker.schema(dataSchema.name, dataSchema.schema, dataSchema.generationType);
    });
    return currentMocker;
}

function createSchema(name, schema, generationType, overrideJson, classReference) {
    return {
        name: name,
        generationType: generationType,
        overrideJson: overrideJson || {},
        schema: Object.assign({}, schema, overrideJson)
    }
}

module.exports = {
    createSchema: createSchema,
    createMocker: createMocker,
};