import { BigInt } from "@graphprotocol/graph-ts";
import {
  nflinks,
  ApprovalForAll,
  DeLinked,
  Linked,
  LinkerMinted,
  OwnershipTransferred,
  Paused,
  ReferralTokenMint,
  TransferBatch,
  TransferSingle,
  URI,
  Unpaused,
  UserRegistered,
} from "../generated/nflinks/nflinks";
import { NFT, Link } from "../generated/schema";

export function handleApprovalForAll(event: ApprovalForAll): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  //let entity = ExampleEntity.load(event.transaction.from);
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  //if (!entity) {
  //  entity = new ExampleEntity(event.transaction.from);
  //
  //  // Entity fields can be set using simple assignments
  //  entity.count = BigInt.fromI32(0);
  //}
  //
  //// BigInt and BigDecimal math are supported
  //entity.count = entity.count + BigInt.fromI32(1);
  //
  //// Entity fields can be set based on event parameters
  //entity.account = event.params.account;
  //entity.operator = event.params.operator;
  //
  //// Entities can be written to the store with `.save()`
  //entity.save();
  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.
  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.CALCULATION_DENOMINATOR(...)
  // - contract.MAX_REFERRAL_SHARE_NUMERATOR(...)
  // - contract.MAX_SYSTEM_SHARE_NUMERATOR(...)
  // - contract.availableSeats(...)
  // - contract.balanceOf(...)
  // - contract.balanceOfBatch(...)
  // - contract.calculateLinkId(...)
  // - contract.calculateLinkerId(...)
  // - contract.calculateReferralTokenId(...)
  // - contract.exists(...)
  // - contract.figureMintPrice(...)
  // - contract.isApprovedForAll(...)
  // - contract.members(...)
  // - contract.mintPriceIncreaseNumerator(...)
  // - contract.mintPrices(...)
  // - contract.onERC1155BatchReceived(...)
  // - contract.onERC1155Received(...)
  // - contract.oov3(...)
  // - contract.owner(...)
  // - contract.paused(...)
  // - contract.referralBalances(...)
  // - contract.referralShareNumerator(...)
  // - contract.referrers(...)
  // - contract.setNextMintPrice(...)
  // - contract.supportsInterface(...)
  // - contract.systemBalance(...)
  // - contract.systemShareNumerator(...)
  // - contract.tokenBalances(...)
  // - contract.totalSupply(...)
  // - contract.totalSupply(...)
  // - contract.uri(...)
}

export function handleDeLinked(event: DeLinked): void {
  let link = Link.load(event.params.linkId_.toHex());
  if (link) {
    link.weight = link.weight.minus(event.params.weight);
    link.save();
  }
}

export function handleLinked(event: Linked): void {
  let subject = NFT.load(event.params.subjectLinkerId_.toHex());
  let object = NFT.load(event.params.objectLinkerId_.toHex());

  if (!subject) {
    subject = new NFT(event.params.subjectLinkerId_.toHex());
    subject.chainId = event.params.subjectChainId_;
    subject.address = event.params.subjectTokenAddress_.toHexString();
    subject.tokenId = event.params.subjectTokenId_;
    subject.balance = BigInt.fromI32(0);
    subject.value = BigInt.fromI32(0);
    if (object) {
      subject.points = object.points.div(BigInt.fromI32(10));
    }
    subject.totalSupply = BigInt.fromI32(0);
  } else {
    if (object) {
      subject.points = subject.points.plus(
        object.points.div(BigInt.fromI32(10))
      );
    }
  }

  subject.save();

  let link = Link.load(event.params.linkId_.toHex());
  if (!link) {
    link = new Link(event.params.linkId_.toHex());
    link.subject = event.params.subjectLinkerId_.toHex();
    link.target = event.params.objectLinkerId_.toHex();
    link.weight = event.params.weight;
  } else {
    link.weight = link.weight.plus(event.params.weight);
  }
  link.save();
}

export function handleLinkerMinted(event: LinkerMinted): void {
  /*
    event LinkerMinted(
        uint256 indexed linkerId_,
        uint256 chainId_,
        address tokenAddress_,
        uint256 tokenId_,
        uint256 mintPrice_,
        uint256 systemShare_,
        uint256 referrerShare_,
        address referrer,
        uint256 tokenShare_
    );
  */
  let nft = NFT.load(event.params.linkerId_.toHex());

  if (!nft) {
    nft = new NFT(event.params.linkerId_.toHex());
    nft.chainId = event.params.chainId_;
    nft.address = event.params.tokenAddress_.toHexString();
    nft.tokenId = event.params.tokenId_;
    nft.balance = event.params.tokenShare_;
    nft.value = event.params.mintPrice_;
    nft.points = event.params.mintPrice_;
    nft.totalSupply = BigInt.fromI32(1);
  } else {
    nft.balance = nft.balance.plus(event.params.tokenShare_);
    nft.value = event.params.mintPrice_;
    nft.points = event.params.mintPrice_.plus(event.params.mintPrice_);
    nft.totalSupply = nft.totalSupply.plus(BigInt.fromI32(1));
  }
  nft.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleReferralTokenMint(event: ReferralTokenMint): void {}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferSingle(event: TransferSingle): void {}

export function handleURI(event: URI): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleUserRegistered(event: UserRegistered): void {}
