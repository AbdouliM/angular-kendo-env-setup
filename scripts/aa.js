/*#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

try {
    console.log(`🛠 Running with Node: ${process.execPath}`);
    console.log(`📁 Current working directory: ${process.cwd()}`);
    console.log(`📁 Script directory: ${__dirname}`);

    // Paths
    const projectRoot = path.resolve(process.cwd(), "..", "..");
    const packageListPath = path.join(process.cwd(), "packages.json");

    console.log(`🔍 Looking for packages.json at: ${packageListPath}`);
    if (!fs.existsSync(packageListPath)) {
        throw new Error(`❌ packages.json not found at ${packageListPath}`);
    }

    const packages = JSON.parse(fs.readFileSync(packageListPath, "utf8"));
    console.log(`📋 Loaded packages:`, packages);

    // Target package.json
    const targetPkgPath = path.join(projectRoot, "package.json");
    console.log(`🎯 Target package.json: ${targetPkgPath}`);
    if (!fs.existsSync(targetPkgPath)) {
        throw new Error(`❌ No package.json found at ${targetPkgPath}`);
    }

    const targetPkg = JSON.parse(fs.readFileSync(targetPkgPath, "utf8"));
    targetPkg.dependencies = targetPkg.dependencies || {};
    targetPkg.devDependencies = targetPkg.devDependencies || {};

    // Track added / updated packages
    const addedPackages = [];
    const updatedPackages = [];
    const addedDevPackages = [];
    const updatedDevPackages = [];

    // Merge dependencies
    for (const [pkg, version] of Object.entries(packages.dependencies || {})) {
        const currentVersion = targetPkg.dependencies[pkg];
        if (!currentVersion) {
            addedPackages.push(`${pkg}@${version}`);
        } else if (currentVersion !== version) {
            updatedPackages.push(`${pkg}: ${currentVersion} → ${version}`);
        }
        targetPkg.dependencies[pkg] = version;
    }

    // Merge devDependencies
    for (const [pkg, version] of Object.entries(packages.devDependencies || {})) {
        const currentVersion = targetPkg.devDependencies[pkg];
        if (!currentVersion) {
            addedDevPackages.push(`${pkg}@${version}`);
        } else if (currentVersion !== version) {
            updatedDevPackages.push(`${pkg}: ${currentVersion} → ${version}`);
        }
        targetPkg.devDependencies[pkg] = version;
    }

    // Log what’s happening
    if (addedPackages.length > 0) console.log(`➕ Adding dependencies: ${addedPackages.join(", ")}`);
    if (updatedPackages.length > 0) console.log(`🔄 Updating dependencies: ${updatedPackages.join(", ")}`);
    if (addedDevPackages.length > 0) console.log(`➕ Adding devDependencies: ${addedDevPackages.join(", ")}`);
    if (updatedDevPackages.length > 0) console.log(`🔄 Updating devDependencies: ${updatedDevPackages.join(", ")}`);

    // Write package.json
    fs.writeFileSync(targetPkgPath, JSON.stringify(targetPkg, null, 2) + "\n", "utf8");
    console.log("📄 package.json updated successfully.");




    console.log("✅ All packages processed successfully!");

} catch (err) {
    console.error("❌ Installation failed:", err.message);
    console.error(err.stack);
    process.exit(1);
}
 */