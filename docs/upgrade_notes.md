---
id: update_notes
title: Update Notes
sidebar_label: Update Notes
---

<a name="update_to_2.11.0"></a>
## Updating to 2.11.0 ##

### Maya in deadline

We added or own maya deadline plugin to make render management easier. It operates the same as standard mayaBatch in deadline, but allow us to separate Pype sumitted jobs from standard submitter. You'll need to follow this guide to update this [install pype deadline](https://pype.club/docs/admin_hosts#pype-dealine-supplement-code)


<a name="update_to_2.10.0"></a>
## Updating to 2.10.0 ##

### Maya in deadline

We added or own maya deadline plugin to make render management easier. It operates the same as standard mayaBatch in deadline, but allow us to separate Pype sumitted jobs from standard submitter. You'll need to follow this guide to update this [install pype deadline](https://pype.club/docs/admin_hosts#pype-dealine-supplement-code)


<a name="update_to_2.9.0"></a>
## Updating to 2.9.0 ##

### Review and Burnin PRESETS

This release introduces a major update to working with review and burnin presets. They can now be much more granular and can target extremely specific usecases. The change is backwards compatible with previous format of review and burnin presets, however we highly recommend updating all the presets to the new format. Documentation on what this looks like can be found on pype main [documentation page](https://pype.club/docs/admin_presets_plugins#publishjson).


### Multiroot and storages

With the support of multiroot projects, we removed the old `storage.json` from configuration and replaced it with simpler `config/anatomy/roots.json`. This is a required change, but only needs to be done once per studio during the update to 2.9.0. [Read More](https://pype.club/docs/next/admin_config#roots)



<a name="update_to_2.7.0"></a>
## Updating to 2.7.0 ##

### Master Versions
To activate `master` version workflow you need to activate `integrateMasterVersion` plugin in the `config/presets/plugins/global/publish.json`

```
"IntegrateMasterVersion": {"enabled": true},
```

### Ftrack

Make sure that `intent` attributes in ftrack is set correctly. It should follow this setup unless you have your custom values
```
{
    "label": "Intent",
    "key": "intent",
    "type": "enumerator",
    "entity_type": "assetversion",
    "group": "avalon",
    "config": {
        "multiselect": false,
        "data": [
            {"test": "Test"},
            {"wip": "WIP"},
            {"final": "Final"}
        ]
    }
```


<a name="update_to_2.6.0"></a>
## Updating to 2.6.0 ##

### Dev vs Prod

If you want to differentiate between dev and prod deployments of pype, you need to add `config.ini` file to `pype-setup/pypeapp` folder with content.

```
[Default]
dev=true
```

### Ftrack

You will have to log in to ftrack in pype after the update. You should be automatically prompted with the ftrack login window when you launch 2.6 release for the first time.

Event server has to be restarted after the update to enable the ability to control it via action.


### Presets

There is a major change in the way how burnin presets are being stored. We simplified the preset format, however that means the currently running production configs need to be tweaked to match the new format.

:::neutral Example of converting burnin preset from 2.5 to 2.6
<!--DOCUSAURUS_CODE_TABS-->

<!--2.5 burnin preset-->

```
"burnins":{
      "TOP_LEFT": {
        "function": "text",
        "text": "{dd}/{mm}/{yyyy}"
      },
      "TOP_CENTERED": {
          "function": "text",
          "text": ""
      },
      "TOP_RIGHT": {
          "function": "text",
          "text": "v{version:0>3}"
      },
      "BOTTOM_LEFT": {
          "function": "text",
          "text": "{frame_start}-{current_frame}-{frame_end}"
      },
      "BOTTOM_CENTERED": {
          "function": "text",
          "text": "{asset}"
      },
      "BOTTOM_RIGHT": {
          "function": "frame_numbers",
          "text": "{username}"
      }
```

<!--2.6 burnin preset-->
```
"burnins":{
    "TOP_LEFT": "{dd}/{mm}/{yyyy}",
    "TOP_CENTER": "",
    "TOP_RIGHT": "v{version:0>3}"
    "BOTTOM_LEFT": "{frame_start}-{current_frame}-{frame_end}",
    "BOTTOM_CENTERED": "{asset}",
    "BOTTOM_RIGHT": "{username}"
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
