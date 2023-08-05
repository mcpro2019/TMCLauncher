const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'http://mc.westeroscraft.com/WesterosCraftLauncher/distribution.json'
// https://helios-files.geekcorner.eu.org/distribution.json
// https://raw.githubusercontent.com/mcpro2019/TMCLauncher/main/distribution.json
exports.REMOTE_DISTRO_URL = 'https://raw.githubusercontent.com/mcpro2019/TMCLauncher/main/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api