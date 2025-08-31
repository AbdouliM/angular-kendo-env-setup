#!/usr/bin/env node
const cp = require("child_process");
const execSync = cp.execSync;

const packages = require("./packages20");

function verifierNode() {
  try {
    const version = execSync("node -v").toString().trim();
    console.log(`✅ Node.js version : ${version}`);
  } catch {
    console.error("❌ Node.js n'est pas installé !");
    process.exit(1);
  }
}

function installerPackages(paquets) {
  console.log("🔧 Installation des packages...");
  Object.entries(paquets).forEach(([pkg, version]) => {
    console.log(`Installation de ${pkg}@${version}`);
    execSync(`npm install ${pkg}@${version} --save`, { cwd: process.cwd(), stdio: "inherit" });
  });
  console.log("✅ Tous les packages ont été installés avec succès.");
}

function setupTeam() {
  verifierNode();
  installerPackages(packages);
}

setupTeam();


