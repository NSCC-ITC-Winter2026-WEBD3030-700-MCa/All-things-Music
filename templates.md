# Templates

This file contains markdown templates for albums and songs that utilize docmd's custom formatting.

## Album Template

Use the following template when referencing several songs from a single album

```md
## Album Name

::: tabs
== tab "Song Title 1"
| Title | Artist(s) | Subgenre | Year |
| :---- | :-------: | :------: | ---: |
| Title | Artist(s) | Subgenre | Year |

== tab "Song Title 2"
| Title | Artist(s) | Subgenre | Year |
| :---- | :-------: | :------: | ---: |
| Title | Artist(s) | Subgenre | Year |

== tab "Song Title 3"
| Title | Artist(s) | Subgenre | Year |
| :---- | :-------: | :------: | ---: |
| Title | Artist(s) | Subgenre | Year |
:::
```

## Song Template

Use the following template when referencing a single song distinct from its album. For singles, remove the Album column from the table.

```md
## Song Name

::: card
| Title | Album | Artist(s) | Subgenre | Year |
| :---- | :---: | :-------: | :------: | ---: |
| Title | Album | Artist(s) | Subgenre | Year |
:::
```