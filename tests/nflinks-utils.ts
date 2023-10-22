import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
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
  UserRegistered
} from "../generated/nflinks/nflinks"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createDeLinkedEvent(
  subjectChainId_: BigInt,
  subjectTokenAddress_: Address,
  subjectTokenId_: BigInt,
  objectChainId_: BigInt,
  objectTokenAddress_: Address,
  objectTokenId_: BigInt,
  weight: BigInt
): DeLinked {
  let deLinkedEvent = changetype<DeLinked>(newMockEvent())

  deLinkedEvent.parameters = new Array()

  deLinkedEvent.parameters.push(
    new ethereum.EventParam(
      "subjectChainId_",
      ethereum.Value.fromUnsignedBigInt(subjectChainId_)
    )
  )
  deLinkedEvent.parameters.push(
    new ethereum.EventParam(
      "subjectTokenAddress_",
      ethereum.Value.fromAddress(subjectTokenAddress_)
    )
  )
  deLinkedEvent.parameters.push(
    new ethereum.EventParam(
      "subjectTokenId_",
      ethereum.Value.fromUnsignedBigInt(subjectTokenId_)
    )
  )
  deLinkedEvent.parameters.push(
    new ethereum.EventParam(
      "objectChainId_",
      ethereum.Value.fromUnsignedBigInt(objectChainId_)
    )
  )
  deLinkedEvent.parameters.push(
    new ethereum.EventParam(
      "objectTokenAddress_",
      ethereum.Value.fromAddress(objectTokenAddress_)
    )
  )
  deLinkedEvent.parameters.push(
    new ethereum.EventParam(
      "objectTokenId_",
      ethereum.Value.fromUnsignedBigInt(objectTokenId_)
    )
  )
  deLinkedEvent.parameters.push(
    new ethereum.EventParam("weight", ethereum.Value.fromUnsignedBigInt(weight))
  )

  return deLinkedEvent
}

export function createLinkedEvent(
  subjectChainId_: BigInt,
  subjectTokenAddress_: Address,
  subjectTokenId_: BigInt,
  objectChainId_: BigInt,
  objectTokenAddress_: Address,
  objectTokenId_: BigInt,
  weight: BigInt
): Linked {
  let linkedEvent = changetype<Linked>(newMockEvent())

  linkedEvent.parameters = new Array()

  linkedEvent.parameters.push(
    new ethereum.EventParam(
      "subjectChainId_",
      ethereum.Value.fromUnsignedBigInt(subjectChainId_)
    )
  )
  linkedEvent.parameters.push(
    new ethereum.EventParam(
      "subjectTokenAddress_",
      ethereum.Value.fromAddress(subjectTokenAddress_)
    )
  )
  linkedEvent.parameters.push(
    new ethereum.EventParam(
      "subjectTokenId_",
      ethereum.Value.fromUnsignedBigInt(subjectTokenId_)
    )
  )
  linkedEvent.parameters.push(
    new ethereum.EventParam(
      "objectChainId_",
      ethereum.Value.fromUnsignedBigInt(objectChainId_)
    )
  )
  linkedEvent.parameters.push(
    new ethereum.EventParam(
      "objectTokenAddress_",
      ethereum.Value.fromAddress(objectTokenAddress_)
    )
  )
  linkedEvent.parameters.push(
    new ethereum.EventParam(
      "objectTokenId_",
      ethereum.Value.fromUnsignedBigInt(objectTokenId_)
    )
  )
  linkedEvent.parameters.push(
    new ethereum.EventParam("weight", ethereum.Value.fromUnsignedBigInt(weight))
  )

  return linkedEvent
}

export function createLinkerMintedEvent(
  linkerId_: BigInt,
  chainId_: BigInt,
  tokenAddress_: Address,
  tokenId_: BigInt,
  mintPrice_: BigInt,
  systemShare_: BigInt,
  referrerShare_: BigInt,
  referrer: Address,
  tokenShare_: BigInt
): LinkerMinted {
  let linkerMintedEvent = changetype<LinkerMinted>(newMockEvent())

  linkerMintedEvent.parameters = new Array()

  linkerMintedEvent.parameters.push(
    new ethereum.EventParam(
      "linkerId_",
      ethereum.Value.fromUnsignedBigInt(linkerId_)
    )
  )
  linkerMintedEvent.parameters.push(
    new ethereum.EventParam(
      "chainId_",
      ethereum.Value.fromUnsignedBigInt(chainId_)
    )
  )
  linkerMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress_",
      ethereum.Value.fromAddress(tokenAddress_)
    )
  )
  linkerMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId_",
      ethereum.Value.fromUnsignedBigInt(tokenId_)
    )
  )
  linkerMintedEvent.parameters.push(
    new ethereum.EventParam(
      "mintPrice_",
      ethereum.Value.fromUnsignedBigInt(mintPrice_)
    )
  )
  linkerMintedEvent.parameters.push(
    new ethereum.EventParam(
      "systemShare_",
      ethereum.Value.fromUnsignedBigInt(systemShare_)
    )
  )
  linkerMintedEvent.parameters.push(
    new ethereum.EventParam(
      "referrerShare_",
      ethereum.Value.fromUnsignedBigInt(referrerShare_)
    )
  )
  linkerMintedEvent.parameters.push(
    new ethereum.EventParam("referrer", ethereum.Value.fromAddress(referrer))
  )
  linkerMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenShare_",
      ethereum.Value.fromUnsignedBigInt(tokenShare_)
    )
  )

  return linkerMintedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createReferralTokenMintEvent(
  referrer_: Address,
  tokenId_: BigInt
): ReferralTokenMint {
  let referralTokenMintEvent = changetype<ReferralTokenMint>(newMockEvent())

  referralTokenMintEvent.parameters = new Array()

  referralTokenMintEvent.parameters.push(
    new ethereum.EventParam("referrer_", ethereum.Value.fromAddress(referrer_))
  )
  referralTokenMintEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId_",
      ethereum.Value.fromUnsignedBigInt(tokenId_)
    )
  )

  return referralTokenMintEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createUserRegisteredEvent(
  user_: Address,
  referrer_: Address
): UserRegistered {
  let userRegisteredEvent = changetype<UserRegistered>(newMockEvent())

  userRegisteredEvent.parameters = new Array()

  userRegisteredEvent.parameters.push(
    new ethereum.EventParam("user_", ethereum.Value.fromAddress(user_))
  )
  userRegisteredEvent.parameters.push(
    new ethereum.EventParam("referrer_", ethereum.Value.fromAddress(referrer_))
  )

  return userRegisteredEvent
}
