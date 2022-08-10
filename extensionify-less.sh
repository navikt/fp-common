#!/usr/bin/env bash

echo "extensionify-less: monkeypatcher node_modules/nav-frontend-* så less imports får .less extensions"

function is_gnu_sed(){
  sed --version >/dev/null 2>&1
}

function sed_i_wrapper(){
  if is_gnu_sed; then
    $(which sed) "$@"
  else
    a=()
    for b in "$@"; do
      [[ $b == '-i' ]] && a=("${a[@]}" "$b" "") || a=("${a[@]}" "$b")
    done
    $(which sed) "${a[@]}"
  fi
}

sed_i_wrapper -i -E 's/(require\("nav-.*-style)("\));/\1\/src\/index.less\2/g' node_modules/nav*/**/*.js