# Introduction

NetherScript is a hard fork of CBScript by SethBling, mantained by the community from MapVerse.net. It is focused on making Minecraft maps instead of just datapacks.

This compiler will compile NetherScript files into Minecraft datapack zip files. It has many higher level language features that don't exist at the Minecraft command level. Awareness of implementation details will help you avoid performance overhead and bugs. The files in the datapack are generally organized by source file line numbers to make it easier to find the particular compiled mcfunction files you're looking for.

+ NetherScript Wiki [https://mapverse-net.github.io/netherscript-docs/](https://mapverse-net.github.io/netherscript-docs/)
+ MapVerse Discord: [https://discord.gg/SA3BwJcXtn](https://discord.gg/SA3BwJcXtn)

# Installation and Requirements

The NetherScript compiler requires Python 3. Install the required libraries by running:

```pip install -r requirements.txt```

There are instructions in run.cmd for setting up your Windows registry to be able to double click .ntscript files in order to run the compiler.

You can use cbscript-npp-highlighting.xml with Notepad++ to add syntax highlighting.
You can also use the CBScript Visual Studio Code extension.

# Running the Compiler

Usage (for linux):
```python3 compile.py (file)```

Usage (for windows):
```py compile.py (file)```

This program will monitor your .ntscript file for changes, and recompile any time it observes the file has been changed. Each ntscript file has a world file at the beginning that specifies where to place the compiled datapack. The compiled datapack will be placed in that world's /datapacks folder, with the same base name as the .ntscript file, overwriting it as necessary. You can use /reload in game to reload the datapack when it's been recompiled.

# Features

NetherScript includes many high level features that simplify the syntax and construction of datapacks, as well as make them easier to maintain. Look at the scripts in the "examples" folder for examples. There are also archived script subfolders that contain datapacks for older versions of the game.

* Include files
* Arithmetic expressions
* For/while loops
* If/else if/else blocks
* Execute syntax
* Tellraw with simplified syntax
* Title/subtitle/actionbar with simplified syntax.
* Macro function support
* Entity selector definitions, including data paths
* Advancement/loot table/block tag/predicate definitions.
* Function/method calls with parameters.
* Switch, supporting both numbers and block types
* Compile-time variables
* Compile-time loop unrolling
* Compile-time macros
* Template functions
* Coordinate vectors

# Task List

* A proper documentation
* Wrappers for the most used Minecraft commands
* MiniMessage support
* A mannequin API
* In-line comments
* Proper compiler errors
