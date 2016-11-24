# cordova-backbone
Simple skeleton for cordova/Backbone mobile apps.

## To get the project up and running:

Install the plugins and platforms registered in the **config.xml**: ```cordova prepare```

The required libraries are already included, although they must be updated to the latest versions.

* **These are the current versions**:
	- jQuery : 3.1.1
	- jQuery Mobile : 1.4.5
	- BackboneJS : 1.3.3
	- UnderscoreJS : 1.8.3
	- requireJS : 2.3.2
	- text : 2.0.15

## Useful cordova commands (using `--save`)

* **Managing platforms**:
	- Add a new platform: `cordova platform add <platform> --save`

	- Update the current platform version: `cordova platform update <platform[@<version>]> --save`

	- Save a previously added platform: `cordova platform save`

	- Remove a platform: `cordova platform remove <platform> --save`

* **Managing plugins**:
	- Add new plugins specifying the version: `cordova plugin add <plugin[@<version>]> --save`

	- Update a plugin: `cordova plugin update <plugin[@<version>]> --save`

	- Save previously added plugins: `cordova plugin save`

	- Remove a plugin: `cordova plugin remove <plugin> --save`
