# Ableton Project Generator (APG)

## Global commands

### template

Creates a template out of an existing boilerplate project


| Argument | Default value  | Description       |
|----------|----------------|-------------------|
| `-p`     | `void` | Path to the boilerplate template |
| `-n`     | `<Folder Name> Template` | *Optional:* name of the template instance |

```bash
apg template -p /path/to/template/project -n "my template"
apg t -p /path/to/template/project -n "my template"
```

### create

Creates a project based on a certain template

| Argument | Default value  | Description       |
|----------|----------------|-------------------|
| `-t`     | `void` | Path to the boilerplate template or the name given by the `template` command |
| `-d`     | `process.cwd()` | Destination path of the project instance |


```bash
apg create -t /path/to/template/project -d /path/to/project/instance
apg c -t "my template" -d /path/to/project/instance
```
## In-project commands

### compress

Creates an archive with the project contents


| Argument | Default value  | Description       |
|----------|----------------|-------------------|
| `-n`     | `<Project Name>` v`<version>` | *Optional:* The name of the archive, allowed placeholders: `{project-name}`, `{version}` |

```bash
apg run compress [-n "Archive Name"]
apg r compress
```

### bundle-exports

Creates a archive bundle with all exports

| Argument | Default value  | Description       |
|----------|----------------|-------------------|
| `-n`     | `<Project Name>` - Exports v`<version>` | *Optional:* The name of the archive, allowed placeholders: `{project-name}`, `{version}` |

```bash
apg run bundle-exports [-n "Exports Bundle"]
apg run be
```
